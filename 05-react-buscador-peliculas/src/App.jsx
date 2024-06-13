
import './App.css'

import { useMovies } from './Hooks/useMovies'
import { Movies } from './components/movies'




function App() {
  const{ movies} = useMovies()
  
  const handleSubmit=(event) =>{
    event.preventDefault()
    const {query} = Object.fromEntries(new window.FormData(event.target))
    console.log({query})

  }
  
  
return (
                 
   <div className='page'>
    <header>
      <h1>Buscador de Peliculas</h1>
      <form className='form' onSubmit={handleSubmit} >
          <input  name='query' placeholder='Avengers, Matrix, Fast,'></input> 
          <button type= 'submit'>Buscar</button>
      </form>
    </header>

      <main>
      
       <Movies movies={movies} />
        
      </main>
      
   </div>



)
}

export default App
