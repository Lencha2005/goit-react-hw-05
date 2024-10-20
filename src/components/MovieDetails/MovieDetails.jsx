import { useEffect, useState } from 'react'
import { getMovieById } from '../../api/tmdb-api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import defaultImg from './defaultImg.jpeg';

import styles from './MovieDetails.module.css';

const MovieDetails = ({id}) => {
    const [movie, setMovie] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchMovieById = async () => {
    try{
        setLoader(true)
        const {data} = await getMovieById(id);
        setMovie(data)
    } catch(error){
        setError(error)
    } finally {
        setLoader(false)
    }
};

fetchMovieById()
    }, []);

    const goBack = () => navigate(location.state.from)

  return (
    <div className={styles.div}>
    <button className={styles.btn} type='button' onClick={goBack}>Go back</button>
    {loader && <Loader/>}
    {error && <ErrorMessage />}
    {movie && 
    <div className={styles.wrap}>
        <img
            className={styles.img}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg}
            alt={movie.title}
        />
        <div className={styles.wrapper}>
        <h2>{movie.title}</h2>
        <p>User Score: {Math.round(movie.popularity)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul className={styles.list}>{movie.genres?.map(item => {
            return <li className={styles.text} key={item.id}>{item.name}</li>
        })}</ul>
    </div>
    </div>}
    <p>Additional information</p>
    <ul>
        <li><Link className={styles.link} state={{from: location.state?.from}} to={`/movies/${id}/cast`} >Cast</Link></li>
        <li><Link className={styles.link} state={{from: location.state?.from}} to={`/movies/${id}/reviews`}>Reviews</Link></li>
    </ul>
    </div>
  )
}

export default MovieDetails

