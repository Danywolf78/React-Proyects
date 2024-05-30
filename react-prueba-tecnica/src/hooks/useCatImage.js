
import { useState, useEffect } from "react";
export function useCatImage({fact}){
    const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
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
            return{imageUrl:`${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
    
    }