import { useState, useEffect } from 'react';
import originalMovies from './data/movies';

function App() {
  const [filteredMovies, setFilteredMovies] = useState(originalMovies)
  const [filterCategory, setFilterCategory] = useState('')
  const [filteredFilm, setFilteredFilm] = useState('')

  useEffect(() => {
    console.log('filtrando film per ' + filterCategory)

    let result = filteredMovies.filter(movie => movie.genre.includes(filterCategory));
    let foundFilm = filteredMovies.filter(movie => movie.title.includes(filteredFilm));


    if (filteredFilm !== '') {
      setFilteredMovies(foundFilm)
      console.log('cerchiamo un film')
    } else if (filterCategory === '') {
      setFilteredMovies(originalMovies)
      console.log('mostro tutti i film')
    } else {
      setFilteredMovies(result)
      console.log('mostro categoria ' + filterCategory)
    }

  }, [filterCategory, filteredFilm])

  return (
    <>
      <div className="container">
        {/* searchbar section  */}
        <span>Search for title</span>
        <br />
        <input type="text" value={filteredFilm} onChange={event => setFilteredFilm(event.target.value)} />

        <hr />

        {/* select section  */}
        <select value={filterCategory} onChange={event => setFilterCategory(event.target.value)}>
          <option value="">search for genre</option>
          {originalMovies.map((movie, index) =>
            <option key={index}>{movie.genre}</option>
          )}
        </select>

        <hr />

        <ul>
          {filteredMovies.map((movie, index) =>
            <li key={index}>
              <strong>{movie.title}</strong>
              <br />
              <span>genere: {movie.genre}</span>
            </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
