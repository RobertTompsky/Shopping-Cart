import "./CartItem.css"
import {removeItem, increase, decrease } from '../features/cart/cartSlice'
import {useDispatch} from 'react-redux'

function CartItem({id, img, title, price, amount}) {
    const dispatch = useDispatch()
    return ( 
        <article className="cart-item">
            <div className="cart-item-content">
                <img className="cart-item-img" src={img} alt={title} />
                <div>
                    <h4 className="cart-item-title">{title}</h4>
                    <h4 className="cart-item-price">{price}</h4>
                    <button className="cart-item-remove"
                    onClick={() => dispatch(removeItem(id))}
                    >REMOVE</button>
                </div>
            </div>
            <div className="cart-item-change">
                <button className="cart-item-change-btn"
                onClick={() => dispatch(increase({id}))}
                >+</button>
                <p className="cart-item-amount">{amount}</p>
                <button className="cart-item-change-btn"
                onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                dispatch(decrease({id}))}}
                >-</button>
            </div>
        </article>
     );
}

export default CartItem;