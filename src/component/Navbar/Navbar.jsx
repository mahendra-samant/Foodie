import React from 'react'
import {Link} from 'react-router-dom'
import '../Navbar/Navbar.css'
import { FaShoppingCart } from "react-icons/fa";

const Navbar=({cart, setShowCart, showCart})=>{
    return (
        <div className='mainContainer'>
            <nav>
                <div className="logo">
                    <div className="foodLogo">🍔</div>
                    <div>Foodie</div>
                </div>

                <ul className='listItems'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/menu'} onClick={()=>setShowCart(!showCart)} style={{padding:"20px"}}>
                        <FaShoppingCart /><span style={{
                            position:"absolute",
                            bottom:"30px",
                            left:"29px"
                        }}>{cart.length}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar