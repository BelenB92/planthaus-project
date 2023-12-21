import './CheckoutForm.css';

import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, mail
        }

        onConfirm(userData)
    }

    return(
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <label className="label">
                    Nombre
                    <input 
                    type="text"
                    className="input"
                    value={name}
                    onChange={({target}) => setName(target.value)} 
                    />
                </label>
                <label className="label">
                    Telefono
                    <input 
                    type="text"
                    className="input"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)} 
                    />
                </label>
                <label className="label">
                    Mail
                    <input 
                    type="text"
                    className="input"
                    value={mail}
                    onChange={({target}) => setMail(target.value)} 
                    />
                </label>
                <div>
                    <button  className='checkout__button' type="submit">
                        Confirmar Orden
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;