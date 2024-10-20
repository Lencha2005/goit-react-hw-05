import { useEffect, useState } from 'react'
import { getMovieCredits } from '../../api/tmdb-api';
import { useParams } from 'react-router-dom';
import defaultPhoto from './defaultPhoto.jpeg';

import styles from './MovieCast.module.css'
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieCast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchMovieCast = async () => {
  try{
      setLoader(true)
        const {data} = await getMovieCredits(movieId);
        if(data.cast.length === 0){
          setError('Not cast')
        } else {
          setData(data.cast);
        }  
  } catch(error){
      setError(error)
  } finally {
      setLoader(false)
  };

 };
 fetchMovieCast();
},[]);

  return (
    <div className={styles.wrap}>
      {loader && <Loader/>}
    {error && <ErrorMessage />}
      {data !== null && data.map(info => {
        return (
          <div key={info.id}>
          <img src={info.profile_path ? `https://image.tmdb.org/t/p/w500${info.profile_path}` : defaultPhoto} className={styles.img}/>
          <p>{info.name}</p>
          <p>Character: {info.character}</p>
          </div>
        )
      })
      }
    </div>
  )
}

export default MovieCast