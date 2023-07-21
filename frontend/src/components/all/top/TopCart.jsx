import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"
const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }
  return (
    <div className='boxShadow'>
    <Slider {...settings}>
      {Tdata.map((value, index) => {
          return (
            <div className='boxShadow' style={{padding:'50px',margin:'30px'}}>
              <div className='box product' key={index}>
              <span className='span'>{value.desc}</span>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </div>
          )
        })}
        </Slider>
    </div>
  )
}

export default TopCart
