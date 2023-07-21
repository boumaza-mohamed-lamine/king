import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'


  const ShopCart = ({ shopItems }) => {
     
  return (
    <>
      {shopItems.map((shopItems) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
              </div>
              <FaShoppingCart  className={"productCard__cart"}/>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>DZD{shopItems.price}.00 </h4>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
