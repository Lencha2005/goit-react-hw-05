
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({movies}) => {
  const location = useLocation();

  return (
    <ul>
        {movies.map(movie => {
          const movieTitle = movie.title || movie.original_name;
            return (
            <li key={movie.id}>
                <Link state={{from: location}} to={`/movies/${movie.id}`} className={styles.link}>{movieTitle}</Link>
            </li>
            )
        })}
    </ul>
  )
}

export default MovieList