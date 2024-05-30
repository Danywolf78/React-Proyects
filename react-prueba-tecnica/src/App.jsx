import { useEffect, useState } from "react";
import './App.css'
import { getRandomFact } from "./services/facts";



//const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function useCatImage({fact}){

const [imageUrl, setImageUrl] = useState();

// Para recuperar la imagen cada vez que tenemos una cita nueva
useEffect(() =>{ 
    if (!fact) return
            const threeFirstWords = fact.split(' ', 3).join(' ');
    
            console.log(threeFirstWords);
            
            fetch(
              `https://cataas.com/cat/says/${threeFirstWords}?size=50&fontColor=red&json=true`
            )
              .then((res) => res.json())
              .then((response) => {
                const { _id } = response
                const url = `/cat/${_id}/says/${threeFirstWords}`
                setImageUrl(url);
              })
    
    
        }, [fact])
        return{imageUrl }

}
export function App() {
  const [fact, setFact] = useState();
 
  //const prefixUrl= useCatImage()
  const{imageUrl}= useCatImage({fact})


  

// para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, []);

    

    const handleClick = async() =>{
       const newFact= await getRandomFact()
       setFact(newFact)
    }

  return (
    <main>
      <h1> Apps de gatitos </h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}alt={`Image extracted using the first trhee words for ${fact}`}/>
      )}
    </main>
  );
}
