import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  



  const changeActive = () => {
    if (active === true) {
      setActive(false)
      
    }
    if (active === false) {
      setActive(true)
      
    }

  }
  const reset = () => {
    setCount(0)
    setActive(false)
  }
  
  

  useEffect(() => {
    let interval = 0 
    if(active===true){
      interval = setInterval(()=> setCount( count + 1), 1000)
    }
    return () => clearInterval(interval);
  }, );

  return (
    <>
      

      <button onClick={changeActive}>Start/Stop</button>
      <button onClick={reset}>reset</button>
      <p>{count}</p>
    </>
  )
}

export default App
