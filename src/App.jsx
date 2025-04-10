import { useState, useEffect } from 'react';
import originalMovies from './data/movies';

function App() {
  // const [movies, setMovies] = useState()

  useEffect(() => {
    console.log('nonnt');
  }, []);

  return (
    <>
      <div className="container">
        <select>
          <option>select genre</option>
          {originalMovies.map((movie, index) =>
            <option key={index}>{movie.genre}</option>
          )}
        </select>
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
