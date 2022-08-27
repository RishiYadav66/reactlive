import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)

    const filterItem = (category) => {
        if(category==="All")
            {
                setMenuData(Menu);
                return ;
            }
            else{
                const updatedList = Menu.filter((curElem) => {
            
                    return curElem.category === category;
                })
                setMenuData(updatedList);
            }
       
    }
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
                    <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
                    {/* <button className='btn-group__item' onClick={() => filterItem("brunch")}>Brunch</button> */}
                    <button className='btn-group__item' onClick={() => filterItem("All")}>All</button>

                    {/* <button className='btn-group__item'>All</button> */}
                </div>
            </nav>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
