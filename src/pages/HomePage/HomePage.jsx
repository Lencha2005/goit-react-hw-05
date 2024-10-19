import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/tmdb-api';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

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
                console.log(data.results)
            } catch (error){
                setError(error.message);
            } finally {
                setLoader(false)
            }
        }

        fetchTrendingMovies();
        console.log(movies)
    }, []);

  return (
    <div>
        <h1>Trending today</h1>
    {movies !== null && <MovieList movies={movies} />}
    </div>
  )
}

export default HomePage