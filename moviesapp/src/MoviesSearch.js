import React,{Fragment, useState} from "react";
import Card from "./Card";


function MoviesSearch() {

// states
const [query,setQuery]= useState("")
const [movies,setMovies] = useState([])




    const searchMovies = async(e)=>{
        e.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=3c9d7662cb65b46a26765f11e19828d0&language=en-Us&query=${query}&page=1&include_adult=false`
       try {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        console.log(data)
           
       } catch (error) {
           console.error(error)
       }

    }
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          SEARCH HERE
        </label>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="MOVIE NAME" className="input" name="query"></input>
        <button type="submit" className="btn">
          search
        </button>
      </form>
      {movies.map(movie=> <Card
      movie={movie}
      key={movie.id}/>
         
         )}
    </>
  );
}

export default MoviesSearch;
