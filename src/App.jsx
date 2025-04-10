import { useState, useEffect } from 'react';
import originalMovies from './data/movies';

function App() {

  const [filterCategory, setFilterCategory] = useState('')

  useEffect(() => {
    console.log('filtrando film per ' + filterCategory)

    if (filterCategory === '') {
      console.log('mostro tutti i film')
    } else {
      console.log('mostro categoria ' + filterCategory)
    }

  }, [filterCategory])

  return (
    <>
      <div className="container">

        {/* select section  */}
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
