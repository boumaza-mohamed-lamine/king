import React from 'react'

const Categories = () => {
  const data = [
    {
    cateImg: "./images/cat1.png",
      cateName: "موضة",
    },
    {
      cateImg: "./images/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/cat3.png",
      cateName: "سيارات",
    },
    {
      cateImg: "./images/cat4.png",
      cateName: "اثاث",
    },
    {
      cateImg: "./images/cat5.png",
      cateName: "هدايا",
    },
    {
      cateImg: "./images/cat6.png",
      cateName: "اغاني",
    },
    {
      cateImg: "./images/cat7.png",
      cateName: "الصحة & الجمال",
    },
    {
      cateImg: "./images/cat8.png",
      cateName: "حيونات",
    },
    {
      cateImg: "./images/cat9.png",
      cateName: "العاب اطفال",
    },
    {
      cateImg: "./images/cat10.png",
      cateName: "البقالة",
    },
    {
      cateImg: "./images/cat11.png",
      cateName: "كتب",
    },
  ]
  return (
    <>
      <div className='category'>
      <div className='box f_flex topC' >
              <h5>Categories </h5> 
            </div>
         {
         data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Categories
