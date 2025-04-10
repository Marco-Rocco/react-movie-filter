import { useState, useEffect } from 'react';
import originalMovies from './data/movies';

function App() {

  const [filterCategory, setFilterCategory] = useState('')


  return (
    <>
      <div className="container">

        <select value={filterCategory} onChange={event => setFilterCategory(event.target.value)}>
          <option value="">search for genre</option>
          {originalMovies.map((movie, index) =>
            <option key={index}>{movie.genre}</option>
          )}
        </select>
        {filterCategory}
        <ul>
          {originalMovies.map((movie, index) =>
            <li key={index}>
              {movie.title}
            </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
