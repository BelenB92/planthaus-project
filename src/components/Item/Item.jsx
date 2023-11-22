import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return(
        <article className="item__card">
            <header>
                <h2 className="item__header">
                    {name}
                </h2>
            </header>
            <picture className="item__img">
                <img style={{ width: 200, height: 280 }} src={img} alt={name} />
            </picture>
            <section className="item__info">
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock: {stock}
                </p>
            </section>
            <footer className="item__footer">
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;