import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './movie/movie'
import './movies.scss'
import { Route } from 'react-router-dom'
import SelectedMovies from './selected-movies/selected-movies'

interface IState {
  movies: any
  favouritedMovies: any
}

interface MoviesProps {}
const url = 'https://api.tvmaze.com/singlesearch/shows?q=love&embed=episodes'
const Movies: React.FC<MoviesProps> = () => {
  const [state, setState] = useState({
    movies: [],
    favouritedMovies: [],
  } as IState)
  useEffect(() => {
    async function getMovies() {
      const gotMovies = (await axios.get(url)).data._embedded.episodes
      const movies = gotMovies.map((movie: any) => ({
        ...movie,
        favourite: false,
      }))
      setState({ ...state, movies })
    }

    getMovies()
  }, [])

  const favouritedMovies = () => {
    const movies = [...state.movies]
    const filteredMovies = movies.filter((movie) => {
      return movie.favourite === true && movie
    })
    setState({
      ...state,
      favouritedMovies: filteredMovies,
    })
  }

  const toggleFavourite = (movieID: number) => {
    const originalMovies = [...state.movies]
    const newMovies = originalMovies.map((movie: any) =>
      movie.id === movieID ? { ...movie, favourite: !movie.favourite } : movie,
    )
    setState({
      ...state,
      movies: newMovies,
    })
  }
  console.log('--------------------------')
  console.log(state.movies[0])
  console.log(state.favouritedMovies)

  return (
    <div className="wrapper">
      <div className="movies">
        {state.movies.map((movie: any) => (
          <Movie
            toggleFavourite={toggleFavourite}
            key={movie.id}
            movie={movie}
          />
        ))}
        {/* <Route
          path="/favourites"
          exact
          component={(props: any) => (
            )}
        /> */}
      </div>
      <SelectedMovies
        toggleFavourite={toggleFavourite}
        movies={state.favouritedMovies}
      />
    </div>
  )
}

export default Movies
