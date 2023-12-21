import './Cart.css';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const { cartItems, totalCartItems, removeItem, updateItemQuantity, clearCartItems } = useContext(CartContext)

    const handleConfirmOrder = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                title: "Carrito de compras vacio",
                text: "Por favor, agrega productos antes de finalizar la compra",
                icon: "error"
            })

        } else {
            navigate("/checkout")
        }
    }

    const handleEmptyCart = () => {
        clearCartItems()
    }

    return (
        <><div className='cart__title'>
            <h2>Carrito</h2>
        </div>
        <div className='cart__info'>
                {cartItems.map((item) => (
                    <div className='cart__items' key={item.id}>
                        <p className='cart__item__name'>Nombre: {item.name}</p>
                        <p className='cart__item__price'>Precio unitario: ${item.price}</p>
                        <p className='cart__item__stock'>Cantidad: {item.quantity}</p>
                        <p className='cart__item__sub'>Subtotal: ${item.subTotal}</p>
                        <div className='button__cart__detail'>
                            <button className='cart__remove__button' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Quitar</button>
                            <button  className='cart__update__button' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Añadir</button>
                        </div>
                        <button className='cart__remove__button' onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}

            <div className='cart__confirm'>
                <h3>Suma total del carrito ${totalCartItems}</h3>
                <button className='cart__button__confirm' onClick={handleConfirmOrder}>Confirmar Compra</button>

                <button className='cart__button__confirm' onClick={handleEmptyCart}>
                    Vaciar Carrito
                </button>
            </div>
        </div></>
    )

}

export default Cart;