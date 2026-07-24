import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Landing from '../component/Landing/Landing'
import Home from '../component/Home/Home'
import About from '../component/About/About'
import Contact from '../component/Contact/Contact'
import NotFound from '../component/NotFound'

const Routing=()=>{
    let [cart,setCart]=useState([])
    let [showCart,setShowCart]=useState(false)

    return (
        <BrowserRouter>
        <Navbar cart={cart} setCart={setCart} setShowCart={setShowCart} showCart={showCart}/>
         <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/menu' element={<Home cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
         </Routes>
         <Footer/>
         

        </BrowserRouter>
    )

}
export default Routing