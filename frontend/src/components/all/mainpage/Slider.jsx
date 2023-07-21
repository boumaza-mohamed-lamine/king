import React from 'react'
import SlideCard from './SlideCard'

const Slider = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container' style={{width:"100%"}}>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default Slider
