import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enable, setEnable] =useState(false)
  useEffect(() => {
    console.log('Efecto',{enable})
      }, [enable])


  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#F44336',
        //border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(0px,0px)`
      }}
      />

     
    <button onClick={() => setEnable(!enable)}>{enable ?'Desactivar' :'Activar'} seguir puntero</button>
    </main>
    
  )
}

export default App
