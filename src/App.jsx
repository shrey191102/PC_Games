
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { ThemeContext } from './context/ThemeContext'
import { useEffect, useState } from 'react'

function App() {

  const [theme,settheme] = useState('dark')
  useEffect(() => {
    settheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  }, [])
  

  return (
    <ThemeContext.Provider value={{theme,settheme}}>
    <div className={`${theme} ${theme =='dark'? 'bg-black':null} h-[100vh]`}>
      <Header/>
      <Home/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
