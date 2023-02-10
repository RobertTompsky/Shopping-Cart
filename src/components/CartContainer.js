import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux'
import './CartContainer.css'
import { clearCart } from '../features/cart/cartSlice'
import { openModal } from "../features/modal/modalSlice";

function CartContainer() {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((state) => state.cart)

    if (amount < 1) {
        return <section className="emptyCart">
            <h2 className="emptyCart-h2">YOUR BAG</h2>
            <h4 className="emptyCart-h4">is currently empty</h4>
        </section>
    }
    return ( 
        <section className="trueCart">
            <h2 className="trueCart-h2">YOUR BAG</h2>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <div>
                <hr />
                <div className="cart-total">
                    <h4 className="cart-total-h4">
                        TOTAL
                    </h4>
                    <h4>${total}</h4>
                </div>
                <div className="cart-btns">
                    <button className="btn clear-btn"
                    onClick={() => dispatch(openModal())}
                    >CLEAR CART</button>
                </div>
            </div>
        </section>
     );
}

export default CartContainer;