import React from 'react'

function Price(){
    let product=[
        {
            "id": 1,
            "title": "Samsung Galaxy S24",
            "price": 799,
        }
    ]
    return(
        <div id='mapping'>
            {product
            .filter(m=>m.price<200)
            .sort((a,b)=>a.price-b.price)
            .map((item,index)=>(
                <div key={index} className='product'>
                    <p className='product_title'>{item.title}</p>
                    <p className='product_price'>{item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Price