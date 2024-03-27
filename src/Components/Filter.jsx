import React from 'react'
import MovieCard from './MovieCard'

const Filter = ({list, title, rating}) => {
  return (
    <div>
        <h1 className='font-bold'>Filtered by {title && `title: ${title} `} {rating && ` rating: ${rating}`}</h1>
        <div className='grid grid-cols-5'>
        
        {
            (title && rating) &&
        list.filter(tes => tes.title.toLowerCase().includes(title.toLowerCase())).filter(tes => tes.rating == rating).map((movie, index) => (
            <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating} />
        ))
        }
        {
            (title && !rating) &&
        list.filter(tes => tes.title.toLowerCase().includes(title.toLowerCase())).map((movie, index) => (
            <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating} />
        ))
        }
        {
            (!title && rating) &&
        list.filter(tes => tes.rating == rating).map((movie, index) => (
            <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating} />
        ))
        }


    </div>
    </div>

  )
}

export default Filter