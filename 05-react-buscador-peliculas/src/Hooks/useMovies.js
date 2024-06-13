import results from "../mocks/results.json" 

export function useMovies(){
    const movies = results.Search 
   
    const mappedMovie= movies?.map(movie =>({
      id:movie.imdbID,
      title:movie.Title,
      year:movie.Year,
      poster:movie.Poster
    
  }))
  return { movies:mappedMovie }
  }