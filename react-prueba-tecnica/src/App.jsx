import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFack";
//const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`


export function App() {
  const { fact, refreshFact } = useCatFact();
  
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1> Apps de gatitos </h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first trhee words for ${fact}`}
        />
      )}
    </main>
  );
}
