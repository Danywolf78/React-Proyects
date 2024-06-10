//import { useState } from 'react'
import './App.css'
import results from "./mocks/results.json" 
//import noresults from "./mocks/noresults.json"
function App() {
const movies =results.Search 
const hasMovies= movies?.length > 0


return (
                 
   <div>
    <header>
      <form action=" ">
          <input placeholder='Avengers, Matrix, Fast,'></input> 
          <button type= 'submit'>Buscar</button>
      </form>
    </header>

      <main>
       
       
        {
          hasMovies?(
            <ul>
              {
              movies.map(movie => (
                <><li key={movie.imdbID}></li><h3>{movie.Title}</h3><p>{movie.Year}</p><img src={movie.Poster} alt={movie.Title}></img></>
              )) 
              } 
              </ul>
          )
          :(
            <p> No se encontraron resultados para esta busqueda</p>
          )
        }
      </main>
      
   </div>



)
}

export default App
