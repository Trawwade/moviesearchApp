import React from "react";

function MoviesSearch() {
    const searchMovies = async(e)=>{
        e.preventDefault()
        const query= "jackreacher"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=3c9d7662cb65b46a26765f11e19828d0&language=en-Us&query=${query}&page=1&include_adult=false`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)

    }
  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          label
        </label>
        <input type="text" placeholder="text" className="input" name="query"></input>
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </div>
  );
}

export default MoviesSearch;
