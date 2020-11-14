import React , {useEffect,useState} from 'react'
import Movie from "./components/Movie";

   const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5c3b6d793805cf5c92a13066fd419c99&page=1";
   

   const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=5c3b6d793805cf5c92a13066fd419c99&query=";

   function App() {
    const [movies, setMovies] = useState([]);

    useEffect( ()=>{
    fetch(FEATURED_API).then(res => res.json()).then(data =>{
     console.log(data);
      setMovies(data.results);
    });
  },[]);
  return (
    <div className="movie-container">
     {movies.length > 0 && movies.map(movie =>(
       <Movie key={movie.id} {...movie}/>
     ))}
    </div>
  );
}

export default App;
