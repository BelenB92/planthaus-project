import './CartWidget.css'

import { useContext } from "react";
import cart from "./assets/cart.svg"
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <Link to='/cart'>
            <div className="cart-widget">
                <img src={cart} alt='cart-widget'/>
                <span className="cart-count">({totalQuantity})</span>
            </div>
        </Link>
    )
}

export default CartWidget;