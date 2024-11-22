import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/images/logo.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';
function Header() {
    const [toggle,settoggle]=useState(false);
    const{theme,settheme}=useContext(ThemeContext);
    useEffect(() => {
      console.log('theme',theme);
      
    
      
    }, [])
    
  return (
    <div className='flex items-center p-3'>
    <img width={90} height={90}  src={logo}  />
    <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <IoSearchOutline /> 
        <input type="text" placeholder='Search Games' className='bg-transparent outline-none px-2' />
        
    </div>
    <div>
        {theme=='light' ? <IoMoon className='bg-slate-200 text-[35px] cursor-pointer text-black p-1 rounded-full'
        onClick={()=>{settheme('dark');
          localStorage.setItem('theme','dark');
        }} />:
         <MdOutlineWbSunny  className='bg-slate-200 text-[35px] cursor-pointer text-black p-1 rounded-full' 
         onClick={()=>{settheme('light');
          localStorage.setItem('theme','light');
         }}/>}
        
        </div>
    </div>
  )
}

export default Header