import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/tmdb-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchMovieReviews = async () => {
      try{
        setLoader(true);
        const {data} = await getMovieReviews(movieId);
        if(data.results.length === 0){
          setError('Not reviews')
        } else {
          setReviews(data.results)
        }
      } catch(error){
        setError(error)
      } finally {
        setLoader(false)
    };
    };
    fetchMovieReviews();
  }, []);

  return (
    <div>
      {loader && <Loader/>}
      {error && <ErrorMessage />}
      {reviews !== null && reviews.map(review => {
        return (
          <div key={review.id}>
            <h3>Author: {review.author}</h3>
            <p className={styles.text}>{review.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews