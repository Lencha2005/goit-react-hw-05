import { useEffect, useState } from 'react'
import { getImage, getMovieById } from '../../api/tmdb-api';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MovieDetails = ({id}) => {
    const [movie, setMovie] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
const fetchMovie = async () => {
    // if(movie === null) {
    //     prompt('error');
    //     return
    // };
    try{
        setLoader(true)
        const data = await getMovieById(id);
        const image = await getImage();
        console.log('image: ', image);

        setMovie(data.data)
        console.log(data.data);

    } catch(error){
        setError(error)
    } finally {
        setLoader(false)
    }
};
fetchMovie()
    }, []);

    const goBack = () => navigate(location.state.from)

  return (
    <>
    <button type='button' onClick={goBack}>Go back</button>
    {movie && 
    <div>
    <div>
        <img src='' alt=''/>
        <h2>{movie.title}</h2>
        <p>User Score: {movie.popularity}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>{movie.genres.map(item => {
            return <li key={item.id}>{item.name}</li>
        })}</ul>
    </div>
    <Link state={{from: location.state.from}} to={`/movies/${id}/cast`}>Cast</Link>
    <Link state={{from: location.state.from}} to={`/movies/${id}/reviews`}>Reviews</Link>
    </div>}
    </>
  )
}

export default MovieDetails
// original_title
