import React, { useState } from 'react'
import Order from './Order';

const showOrders = (props) => {
    let summ = 0
    props.orders.forEach(element => summ += Number.parseFloat(element.price))

    return (<div>
        {props.orders.map(el => (
            <Order onDelete = {props.onDelete} key={el.id} item={el} />
        ))}
        <p className='summ'>Сумма: {new Intl.NumberFormat().format(summ)}$</p>
    </div>)
}

const showNothing = () =>{
    return (<div className='empty'>
        <h2>Товара нет</h2>
    </div>)
}
export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                    <li>Доставка</li>
                </ul>
                <p onClick={() => setCartOpen(cartOpen = !cartOpen)}
                    className={`cart ${cartOpen && 'active'}`}>Корзина</p>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>

    )
}
