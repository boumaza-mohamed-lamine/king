import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container boxShadow'>
          <div className='heading flex'>
            <div className='heading-left ni  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt=""/>
              <h2>المنتجات الجديدة </h2>
            </div>
            <div className='heading-right ni '>
              <span>عرض الجميع</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
