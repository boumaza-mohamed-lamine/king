import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import All from "./All";


const HomePage = () => {

  return (
    <>
        <Header activeHeading={1} />
        <All/>
        <Footer/>
    </>
  )
}

export default HomePage