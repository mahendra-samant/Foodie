import React ,{useState} from 'react'
import aamrasPuri from '../../assets/aamrasPuri.jpg'
import barPaneer from '../../assets/barPaneer.jpg'
import ghavane from '../../assets/ghavane.jpg'
import gulabjamun from '../../assets/gulabjamun.jpg'
import idli from '../../assets/idli.jpg'
import jackDaniels from '../../assets/jackDaniels.jpg'
import kokamSarbat from '../../assets/kokamSarbat.jpg'
import kolambiFry from '../../assets/kolambiFry.jpg'
import lassi from '../../assets/lassi.jpg'
import manchurian from '../../assets/manchurian.jpg'
import misal from '../../assets/misal.jpg'
import modak from '../../assets/modak.jpg'
import pannerTawa from '../../assets/pannerTawa.jpg'
import pasta from '../../assets/pasta.jpg'
import poha from '../../assets/poha.jpg'
import punjabiThali from '../../assets/punjabiThali.jpg'
import rajasthaniThali from '../../assets/rajasthaniThali.jpg'
import samosa from '../../assets/samosa.jpg'
import sitafalNaturals from '../../assets/sitafalNaturals.jpg'
import Solkadhi from '../../assets/Solkadhi.jpg'
import surmaiThali from '../../assets/surmaiThali.jpg'
import tendercoconut from '../../assets/tendercoconut.jpg'
import TrippleRice from '../../assets/TrippleRice.jpg'
import vadapav from '../../assets/vadapav.jpg'
import vanilla from '../../assets/vanilla.jpg'
import vegThali from '../../assets/vegThali.jpg'
import Card from '../Card/Card'
import CartSidebar from '../CartSidebar/CartSidebar'
import { IoSearch } from "react-icons/io5";

import './Home.css'


const Home=({cart,setCart,showCart,setShowCart})=>{
    let [search,setSearch]=useState("")

    let cardData=[
        {
            id:1,
            name:"Aamras Puri",
            img:aamrasPuri,
            price:500,
            desc:"Golden puris served with thick, sweet Alphonso mango pulp — a Maharashtrian summer classic."
        },
        {
            id:2,
            name:"Barbeque Paneer",
            img:barPaneer,
            price:350,
            desc:"Smoky, chargrilled paneer cubes marinated in spiced yogurt and grilled to perfection."
        },
        {
            id:3,
            name:"Ghavane",
            img:ghavane,
            price:200,
            desc:"Soft, lacy rice crepes from the Konkan coast, best enjoyed with coconut chutney."
        },
        {
            id:4,
            name:"Gulab Jamun",
            img:gulabjamun,
            price:100,
            desc:"Melt-in-your-mouth milk dumplings soaked in rose-flavoured sugar syrup. Pure bliss!"
        },
        {
            id:5,
            name:"Idli",
            img:idli,
            price:50,
            desc:"Fluffy, steamed South Indian rice cakes served with sambar and fresh coconut chutney."
        },
        {
            id:6,
            name:"Jack Daniels",
            img:jackDaniels,
            price:3000,
            desc:"Premium Tennessee whiskey — smooth, bold, and aged to perfection. For the connoisseur."
        },
        {
            id:7,
            name:"Kokam Sarbat",
            img:kokamSarbat,
            price:50,
            desc:"A refreshing Konkan cooler made from tangy kokam extract — nature's best summer drink."
        },
        {
            id:8,
            name:"Kolambi Fry",
            img:kolambiFry,
            price:450,
            desc:"Crispy coastal prawns tossed in a fiery Malvani masala — a seafood lover's delight."
        },
        {
            id:9,
            name:"Lassi",
            img:lassi,
            price:80,
            desc:"Thick, creamy churned yogurt drink — sweet or salted, always perfectly chilled."
        },
        {
            id:10,
            name:"Manchurian",
            img:manchurian,
            price:110,
            desc:"Crispy veggie balls tossed in a tangy Indo-Chinese sauce with garlic and spring onions."
        },
        {
            id:11,
            name:"Misal Pav",
            img:misal,
            price:90,
            desc:"Spicy sprouted moth bean curry topped with farsan, onion & lemon — Pune's pride!"
        },
        {
            id:12,
            name:"Modak",
            img:modak,
            price:130,
            desc:"Lord Ganesha's favourite — steamed rice dumplings filled with jaggery and coconut."
        },
        {
            id:13,
            name:"Paneer Tawa",
            img:pannerTawa,
            price:530,
            desc:"Juicy paneer slices sizzled on a tawa with bell peppers, onions and aromatic spices."
        },
        {
            id:14,
            name:"Pasta",
            img:pasta,
            price:110,
            desc:"Al dente pasta tossed in a rich, herby tomato-basil sauce with a hint of chilli."
        },
        {
            id:15,
            name:"Poha",
            img:poha,
            price:50,
            desc:"Light, fluffy flattened rice tempered with mustard, curry leaves, turmeric and peanuts."
        },
        {
            id:16,
            name:"Punjabi Thali",
            img:punjabiThali,
            price:550,
            desc:"A royal spread of dal makhani, paneer, sabzi, roti, rice, raita and dessert."
        },
        {
            id:17,
            name:"Rajasthani Thali",
            img:rajasthaniThali,
            price:530,
            desc:"Dal baati churma, gatte ki sabzi, ker sangri — a grand feast from the desert kingdom."
        },
        {
            id:18,
            name:"Samosa",
            img:samosa,
            price:40,
            desc:"Golden, crispy pastry stuffed with spiced potatoes and peas — India's favourite snack."
        },
        {
            id:19,
            name:"Sitafal Naturals",
            img:sitafalNaturals,
            price:95,
            desc:"Creamy custard apple ice cream made with real fruit pulp — naturally sweet and divine."
        },
        {
            id:20,
            name:"Solkadhi",
            img:Solkadhi,
            price:90,
            desc:"A soothing pink Konkani digestive drink made from kokam and fresh coconut milk."
        },
        {
            id:21,
            name:"Surmai Thali",
            img:surmaiThali,
            price:650,
            desc:"King fish (surmai) fried in Malvani masala, served with rice, sol kadhi and salad."
        },
        {
            id:22,
            name:"Tender Coconut",
            img:tendercoconut,
            price:120,
            desc:"Fresh, chilled tender coconut water with soft malai — nature's most refreshing drink."
        },
        {
            id:23,
            name:"Tripple Rice",
            img:TrippleRice,
            price:140,
            desc:"A hearty combo of steamed rice, jeera rice and fried rice served with dal and papad."
        },
        {
            id:24,
            name:"Vada Pav",
            img:vadapav,
            price:30,
            desc:"Mumbai's soul food — spicy potato vada in a soft pav with chutneys. Iconic!"
        },
        {
            id:25,
            name:"Vanilla Ice-Cream",
            img:vanilla,
            price:80,
            desc:"Classic, velvety vanilla ice cream made with real Madagascar vanilla beans."
        },
        {
            id:26,
            name:"Veg Thali",
            img:vegThali,
            price:210,
            desc:"A wholesome Indian thali with seasonal sabzi, dal, roti, rice, pickle and papad."
        },
        


    ]

    let filterData= cardData.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <div>
            {showCart && <CartSidebar show={showCart} setShow={setShowCart} cart={cart} setCart={setCart}/>}
            <div className="search">
                <div className="searchBar">
                    <IoSearch />
                    <input type="text"
                    placeholder='Search Food Item'
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}
                    />

                </div>
            </div>


            <div>
                <Card cardData={filterData} cart={cart} setCart={setCart}/>
            </div>
        </div>
        
    )

}
export default Home