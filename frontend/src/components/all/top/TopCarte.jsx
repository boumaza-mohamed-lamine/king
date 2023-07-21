import React from 'react'
import TopCart from './TopCart'
import './Top.css'

const TopCarte = () => {
  return (
    <>
     <section className='TopCate background '>
        <div className='container boxShadow'>
          <div className='heading flex'>
            <div className='no ni  f_flex'>
              <i style={{color:"#e94560"}} className='fa-solid fa-border-all'></i>
              <h2 style={{fontSize:"29px",fontWeight: 'bold'}} >افضل الفئات</h2>
            </div>
            <div className='heading-right ni '>
              <span>رئية الكل</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCarte
