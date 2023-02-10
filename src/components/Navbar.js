import { useSelector } from "react-redux";
import cart from "../cart.png"
import "./Navbar.css"


function Navbar() {
    const { amount } = useSelector((store)=>store.cart)
    // или const amount = useSelector((store)=>store.cart.amount)
    return ( 
        <nav>
            <div className="nav-center">
                <div className="nav-container">
                    <h3 className="nav-h3" >REDUX TOOLKIT</h3>
                    <div className="nav-right">
                        <img className="nav-img" src={cart} alt="cart"></img>
                        <div className="amount-container">
                            <p className="total-amount">{amount}</p>
                        </div>
                    </div>    
                </div>
            </div>
        </nav>
     );
}

export default Navbar;