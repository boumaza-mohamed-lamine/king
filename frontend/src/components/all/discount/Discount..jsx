import React from 'react'
import Dcard from './Dcard'


const Discount = () => {
  return (
    <>
     <section className='Discount background NewArrivals'>
        <div className='container boxShadow'>
          <div className='heading flex'>
            <div className='heading-left no  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='' />
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right no '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
