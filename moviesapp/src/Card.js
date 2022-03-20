import React from 'react'


function Card({movie}) {


  return (
        <div className="
      cardlist">
        
            <div className="card">
                <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + 'poster'} />
                <div className="card--content">
                    <h3>{movie.title}</h3>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p className="card--desc">{movie.overview}</p>
                    

                </div>

            </div>
         
          
      </div>
    
  )
}

Card.propTypes = {}

export default Card
