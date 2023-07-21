import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import './Home.css'


const Home = () => {
  return (
    <>
    <section className='home'>
      <div className='container flex'>
        <Categories />
        <Slider/>
      </div>
    </section>
  </>
  );
}

export default Home
