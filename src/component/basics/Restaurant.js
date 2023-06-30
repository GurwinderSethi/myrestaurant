import React, { useState } from 'react'
import "./Style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

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
    const [menuList,setMenuList]=useState(uniqueList);
    const filterItem = (category)=>{
      const updatedList = Menu.filter((curElem)=>{
        return curElem.category === category;
      });
      setmenuData(updatedList);
    };
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant