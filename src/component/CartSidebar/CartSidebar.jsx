import React,{useState} from 'react'
import './CartSidebar.css'
import QRCode from "react-qr-code";
import { IoClose } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const CartSidebar=({show,setShow,cart,setCart})=>{
    
    let [showQr, setShowQr] = useState(false)

    const removeItem = (index) => {
        const updateCart = [...cart]
        if (updateCart[index].qty > 1) {
            updateCart[index].qty -= 1
        } else {
            updateCart.splice(index, 1)
        }
        setCart(updateCart)
    }

    const addItem = (index) => {
        const updateCart = [...cart]
        updateCart[index].qty += 1
        setCart(updateCart)
    }

    let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

    return (
        <>
            <div className="sidebar-backdrop" onClick={() => setShow(false)}></div>
            <div className="sidebar">

                {/* Header */}
                <div className="sidebar-header">
                    <div className="sidebar-title">
                        <FiShoppingBag size={22} />
                        <h2>Your Cart <span>({cart.length})</span></h2>
                    </div>
                    <button className="closeBtn" onClick={() => setShow(false)}><IoClose size={22} /></button>
                </div>

                {/* Items */}
                <div className="sidebar-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <div className="empty-icon">🛒</div>
                            <p>Your cart is empty</p>
                            <span>Add some delicious items!</span>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div className="cartItem" key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <div className="cartDetails">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-price">₹{item.price}</p>
                                    <div className="qtyControls">
                                        <button onClick={() => removeItem(index)}>−</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => addItem(index)}>+</button>
                                    </div>
                                </div>
                                <div className="item-subtotal">₹{item.price * item.qty}</div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="sidebar-footer">
                        <div className="total-row">
                            <span>Subtotal</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="total-row tax">
                            <span>Tax (5%)</span>
                            <span>₹{Math.round(total * 0.05)}</span>
                        </div>
                        <div className="total-row grand">
                            <span>Total</span>
                            <span>₹{total + Math.round(total * 0.05)}</span>
                        </div>
                        <button className="orderBtn" onClick={() => setShowQr(!showQr)}>
                            {showQr ? 'Hide QR' : '🍽️ Place Order'}
                        </button>
                        {showQr && (
                            <div className="qrBox">
                                <p>Scan & Pay</p>
                                <QRCode value="Are you really scaning the QR?" size={180} />
                                <p className="qr-amount">₹{total + Math.round(total * 0.05)}</p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </>
    )
}
export default CartSidebar