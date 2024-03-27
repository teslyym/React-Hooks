import './App.css'
import Filter from './Components/Filter'
import MovieCard from './Components/MovieCard'
import MovieList from './Components/MovieList'
import data from './data'
import { useState } from 'react'

function App() {

  const [movies, setMovies] = useState(data)
  const[filterByTitle, setFilterByTitle] = useState('')
  const[filterByRating, setFilterByRating] = useState(0)
  const[newMovie, setNewMovie] = useState({
    title: '',
    description:'',
    posterURL:'',
    rating:''
  })
  
  return (
   <>
   <div>
    <div>
      
    <input type="text" placeholder='Filter by title' value={filterByTitle} onChange={(e) =>setFilterByTitle(e.target.value)} />
    <input type="text" placeholder='Filter by rating' value={filterByRating} onChange={(e) =>setFilterByRating(e.target.value)} />
    </div>
    <div>
      <p>Add Movie</p>
      <form>
        <input type="text" placeholder='Title' value={newMovie.title} onChange={(e) =>setNewMovie({...newMovie, title:e.target.value})} />
        <input type="text" placeholder='Description' value={newMovie.description} onChange={(e) =>setNewMovie({...newMovie, description:e.target.value})} />
        <input type="text" placeholder='Poster URL' value={newMovie.posterURL} onChange={(e) =>setNewMovie({...newMovie, posterURL:e.target.value})} />
        <input type="text" placeholder='Rating' value={newMovie.rating} onChange={(e) =>setNewMovie({...newMovie, rating:e.target.value})} />
        <button type='submit' className='bg-[green]'>Add Movie</button>
      </form>
    </div>
   </div>
   {
    (filterByRating || filterByTitle)?<Filter list={movies} rating={filterByRating} title={filterByTitle} />:<MovieList list={movies}/>
   }
   </>
  )
}

export default App
