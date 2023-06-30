import React, { useState } from 'react'
import "./Style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';

const uniqueList = [
  ... new Set(
    Menu.map((curElem)=>{
     return curElem.category;
        })
  ),
];

console.log(uniqueList);

const Restaurant = () => {
    const [menuData,setmenuData]=useState(Menu);
    const filterItem = (category)=>{
      const updatedList = Menu.filter((curElem)=>{
        return curElem.category === category;
      });
      setmenuData(updatedList);
    };
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item'>Lunch</button>
        <button className='btn-group__item'>Evening</button>
        <button className='btn-group__item'>Dinner</button>
        <button className='btn-group__item' onClick ={()=>{setmenuData(Menu)}}>All</button>
      </div>
    </nav>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant