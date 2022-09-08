import React from 'react'
import './movie.scss'
interface MovieProps {
  movie: any
  toggleFavourite: (movieID: number) => void
}

const Movie: React.FC<MovieProps> = ({ movie, toggleFavourite }) => {
  return (
    <div className="movie">
      {/* <p>{JSON.stringify(movie, null, 3)}</p> */}
      <img src={movie.image.original} alt="" />
      <p>{movie.name}</p>
      <div>
        <span>Season: {movie.season}</span>
        <span>Number: {movie.number}</span>
      </div>
      <button className="" onClick={() => toggleFavourite(movie.id)}>
        {movie.favourite === true ? 'Undo Favourite' : 'Add Favourite'}
      </button>
    </div>
  )
}
export default Movie
