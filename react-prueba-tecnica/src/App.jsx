import { useEffect, useState } from "react";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
//const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {
  const [fact, setFact] = useState("Lorem ipsum cat fact whatever");
  const [imageUrl, setimageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const threeFirstWords = fact.split(" ", 3).join(" ");

        console.log(threeFirstWords);

        fetch(
          `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setimageUrl(url)
          });
      });
  }, []);

  return (
    <main>
      <h1> Apps de gatitos </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first trhee words for ${fact}` }
        />
      )}
    </main>
  );
}
