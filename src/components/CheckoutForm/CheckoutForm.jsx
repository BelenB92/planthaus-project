import './CheckoutForm.css';

import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

const CheckoutForm = ({ cartItems, total }) => {
    const { addOrderDB } = useContext(FirebaseContext)
    const { clearCartItems, setTotalQuantity } = useContext(CartContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")

    const [orderInfo, setOrderInfo] = useState(null)

    const handleForm = async (e) => {
        e.preventDefault()

        const userData = { name, phone, mail }
        const orderId = await addOrderDB(cartItems, userData, total)

        setOrderInfo({
            orderId,
            items: cartItems,
            total,
        })

        clearCartItems()
        setTotalQuantity(0)

        setName("")
        setPhone("")
        setMail("")
    }

    return(
        <div className="container">
            <form onSubmit={handleForm} className="form">
                <label className="label">
                    Nombre
                    <input 
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    />
                </label>
                <label className="label">
                    Telefono
                    <input 
                    type="number"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    />
                </label>
                <label className="label">
                    Mail
                    <input 
                    type="text"
                    className="input"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)} 
                    />
                </label>
                <div>
                    <button  className='checkout__button' type="submit">
                        Confirmar Orden
                    </button>
                </div>
            </form>

            {orderInfo && (
                <div className="alert alert-success mt-3" role="alert" style={{ width: "40%" }}>
                    <h4 className="alert-heading">¡Compra realizada con éxito!</h4>
                    <p>Tu orden con ID número {orderInfo.orderId} ha sido procesada.
                    <br></br>
                    <br></br>
                    Detalles de la compra:</p>
                    <ul>
                        {orderInfo.items.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                            </li>
                        ))}
                    </ul>
                    <b>Total de la compra: ${orderInfo.items.reduce((total, item) => total + item.quantity * item.price, 0)}</b>
                </div>
            )}

        </div>
    )
}

export default CheckoutForm;