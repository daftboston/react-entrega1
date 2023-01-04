import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserCard from './components/UserCard';
import users from './data/users.json'

function App() {
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]

  const randomIndex = Math.floor(Math.random() * colors.length)

  const [indice, setIndex] = useState (randomIndex)

  // Cambio de texto
  const changeIndex = () => {
    const newRandom = Math.floor(Math.random() * colors.length) 
    setIndex (newRandom)
  }  

  

  return (
    <div className="App">

     <h1>tarjeta </h1>
        <div >
        {
          users.map((name,index)=> {
            return <UserCard dataUsers={name} key = {`item-${index}`} color={colors [indice]}/>
          })       
        }
        
        </div>
          

     <button className='button' onClick={changeIndex}><i className='bx bx-shuffle'></i></button>     
      

            
    
    </div>
  )
}

export default App
