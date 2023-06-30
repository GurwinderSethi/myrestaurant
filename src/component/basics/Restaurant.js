import React, { useState } from 'react'
import "./Style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuData,setmenuData]=useState(Menu);
  return (
    <>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant