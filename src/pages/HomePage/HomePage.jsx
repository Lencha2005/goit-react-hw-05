import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import styles from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try{
                setLoader(true);
                const { data }= await getTrendingMovies();
                setMovies(data.results);
            } catch (error){
                setError(error);
            } finally {
                setLoader(false)
            }
        }

        fetchTrendingMovies();
    }, []);

  return (
    <div>
        <h1 className={styles.title}>Trending today</h1>
        {loader && <Loader/>}
        {error && <ErrorMessage />}
    {movies !== null && <MovieList movies={movies} />}
    </div>
  )
}

export default HomePage