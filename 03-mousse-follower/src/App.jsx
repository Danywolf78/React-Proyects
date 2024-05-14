import "./App.css";
import { useEffect, useState } from "react";
const FollowMouse =() => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition]=useState({x:0, y:0})
  
  //pointer move
  useEffect(() => {
    console.log('Efecto', { enable });
  
    const handleMove = (event) => {
  
      const { clientX, clientY } = event
       console.log(handleMove,{clientX,clientY});
       setPosition({x:clientX, y:clientY})
  
    }

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }
    // cleanup
    // cuando el componente se desmonta
    return () => {
      window.removeEventListener('pointermove',handleMove)
    }
  }, [enable])

  // change body cursor
  useEffect(() => {
document.body.classList.toggle('no-cursor',enable)
return () =>{
  document.body.classList.remove('no-cursor')
}  
},[enable])
  


  return (
    <>
     <div
        style={{
          position: "absolute",
          backgroundColor: "#F44336",
          border: '1px solid #fff',
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 30,
          height: 30,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      />

      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
 
   
  );
}
function App() {
  return(
   <main>
     < FollowMouse />
    </main>

  )
  
}

export default App;
