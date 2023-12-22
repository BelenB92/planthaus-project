import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../../config/firebaseConfig";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, mail}) => {
        setLoading(true)
        const today = new Date()

        try{
            const objOrder = {
                user: {
                    name, phone, mail
                }, 
                items: cart,
                total: total, 
                date: today,
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const prodsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = prodsAddedFromFirestore;
            
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity


                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

        /*    if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded,id)
                clearCart()
            } else {
                console.error('No hay stock del producto')
            }
            */

        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    } 

    if(loading){
        return <h2>Generando tu orden...</h2>
    }

    if(orderId){
        return <h2>El id de tu orden es {orderId}</h2>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;