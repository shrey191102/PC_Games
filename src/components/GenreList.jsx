import React, { useEffect, useState } from 'react'
import Api from '../Services/Api'

function GenreList() {
    const [genresList,setgeList] =useState([])
    const [active,setactive] =useState(0)
    useEffect(() => {
        getGenreList()
    }, [])
    
    const getGenreList=()=>{
        Api.getGenresList.then((resp)=>{
            console.log(resp.data.results);
            setgeList(resp.data.results);
            
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genres</h2>
        {genresList.map((item,index)=>(
            <div
            onClick={()=>setactive(index)} 
            className={`flex gap-2 items-center
             mb-2 cursor-pointer
              hover:bg-gray-300 hover:dark:bg-gray-600 p-2
              group rounded-lg ${active==index?'bg-gray-300 dark:bg-gray-600':null}`}>
                <img src={item.image_background} className={`w-[40px] h-[40px]
                 object-cover
                  rounded-lg
                  group-hover:scale-105 transition-all ease-out duration-300
                  ${active==index?'scale-105':null}`}  />
                <h3 className={`dark:text-white
                group-hover:font-bold
                transition-all ease-out duration-300
                 ${active==index?'font-bold':null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList