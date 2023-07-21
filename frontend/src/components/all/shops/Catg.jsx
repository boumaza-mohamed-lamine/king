import React from "react"
import "./style.css"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead flex'>
          <h1>العلامات التجارية </h1>
          <h1>متاجر </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2' style={{marginTop:"100px",textAlign:"center"}}>
          <button>كل العلامات</button>
        </div>
      </div>
    </>
  )
}

export default Catg