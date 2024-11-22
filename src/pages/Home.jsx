import React from 'react'
import GenreList from '../components/GenreList'
import Api from '../Services/Api'
import { useEffect } from 'react'


function Home() {
  const [gameLists, setGameLists] = React.useState();
  useEffect(()=>{
    getGameLists();
  },[])
  const getGameLists=() =>{
    Api.getGameLists.then((resp)=>{
      console.log(resp.data.results);
      setGameLists(resp.data.results);
      
    })

  }
  return (
    
    <div className='grid grid-cols-4'>
      <div className=' h-full hidden md:block px-8'>
        <GenreList/>
      </div>
      <div className='col-span-4 md:col-span-3'>Game List</div>
    </div>
  )
}

export default Home