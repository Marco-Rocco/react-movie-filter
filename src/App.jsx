import { useState, useEffect } from 'react';
import originalMovies from './data/movies';

function App() {
  const [filteredMovies, setFilteredMovies] = useState(originalMovies)
  const [filterCategory, setFilterCategory] = useState('')

  useEffect(() => {
    console.log('filtrando film per ' + filterCategory)

    let result = filteredMovies.filter(movie => movie.genre.includes(filterCategory));

    if (filterCategory === '') {
      setFilteredMovies(originalMovies)
      console.log('mostro tutti i film')
    } else {
      setFilteredMovies(result)
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
          {filteredMovies.map((movie, index) =>
            <li key={index}>
              {movie.title}
            </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
