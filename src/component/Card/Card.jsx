import React from 'react'
import '../Card/Card.css'

const Card = ({ cardData, cart, setCart }) => {
    console.log(cardData)

    const addToCart = (product) => {
        let newCart = [...cart];

        const item = newCart.find(i => i.id === product.id);

        if (item) {
            
            item.qty++;
        }
        else {
            newCart.push({ ...product, qty: 1 });
        }
        setCart(newCart)
    }

    return (
        <div className='card-container'>

            {cardData.length === 0 ? (<h2>No item found</h2>) : (

                cardData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.img} alt="" />
                            <p>{item.desc}</p>
                            <p className='price'>Price : &#8377;{item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>

                        </div>
                    )

                })
            )}

        </div>
    )

}
export default Card