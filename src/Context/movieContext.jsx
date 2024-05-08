import { useContext, createContext, useState, useEffect } from "react";
const MovieContext = createContext();
export function MovieProvider({ children }) {

const [movies, setMovies] = useState(() => {
const localData = localStorage.getItem("movies");
return localData ? JSON.parse(localData) : [];
  });

  useEffect(()=>{
    localStorage.setItem('movies',JSON.stringify(movies))
  },[movies])

  const addMovie = (movie) => {
    const newMovie = {
      ...movie,
      reviews: movie.reviews || [],
      id: new Date().toISOString(),
    };
    setMovies((preMovie) => [...preMovie, newMovie]);
  };

  return (
    <MovieContext.Provider value={{addMovie,movies}}>
      {children}
  </MovieContext.Provider>
  )
}

export function useMovies(){
  return useContext(MovieContext)
}