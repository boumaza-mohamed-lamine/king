import React from 'react'
import Sdata from "./shops/Sdata"
import Shop from './shops/shop';
import Wrapper from "./wrapper/Wrapper";
import TopCarte from "./top/TopCarte";
import NewArrivals from "./newarrivals/NewArrivals";
import Discount from "./discount/Discount.";
import Home from "./mainpage/Home.";
import Annocument from './annocument/Annocument';


const HAH = () => {
    const { shopItems } = Sdata;
  return (
    
    <>
    <Home/>
    <Wrapper/>
      <TopCarte/>
      <NewArrivals/>
      <Discount/>
    <Shop shopItems={shopItems}/>
    <Annocument/>
     
    </>
  )
}

export default HAH
