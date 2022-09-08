import React from 'react'
import './selected-movies.scss'
interface SelectedMoviesProps {
  movies: any
  toggleFavourite: (movieID: number) => void
}

const SelectedMovies: React.FC<SelectedMoviesProps> = ({
  movies,
  toggleFavourite,
}) => {
  return (
    <div className="movies">
      {movies.map((movie: any, idx: number) => (
        <div key={idx} className="movie">
          <p>{movie.name}</p>
          <img src={movie.image.original} alt="" />
          <div>
            <span>Season: {movie.season}</span>
            <span>Number: {movie.number}</span>
          </div>
          <button className="" onClick={() => toggleFavourite(movie.id)}>
            {movie.favourite === true ? 'Undo Favourite' : 'Add Favourite'}
          </button>
        </div>
      ))}
    </div>
  )
}
export default SelectedMovies
