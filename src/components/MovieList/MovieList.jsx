
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({movies}) => {
  const location = useLocation();

  return (
    <ul>
        {movies.map(movie => {
          const movieTitle = movie.title || movie.original_name;

            return (
            <li key={movie.id}>
                <Link state={{from: location}} to={`/movies/${movie.id}`}>{movieTitle}</Link>
            </li>
            )
        })}
    </ul>
  )
}

export default MovieList