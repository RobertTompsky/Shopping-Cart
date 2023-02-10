import './Modal.css'
import {useDispatch} from 'react-redux'
import {clearCart} from '../features/cart/cartSlice'
import {closeModal} from '../features/modal/modalSlice'

function Modal() {
    const dispatch = useDispatch()
    return ( 
        <aside className="modal-container">
            <div className="modal">
                <h4 className='modal-h4'>Remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button className="modal-btn" onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                        }}>
                        CONFIRM</button>
                    <button className="modal-btn" onClick={() => {dispatch(closeModal())}}>
                        CANCEL</button>
                </div>
            </div>
        </aside>
     );
}

export default Modal;