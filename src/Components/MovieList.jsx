import React from 'react'
import data from '../data'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div>
            <h1>Movie List</h1>
        <div className='grid grid-cols-5'>
        {data.map((movie, index) => (
            <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating} />
            ))}
        
            </div>
        
    </div>
  )
}

export default MovieList