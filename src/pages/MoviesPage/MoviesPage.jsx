import { useEffect, useState } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchMovies } from '../../api/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const MoviesPage = () => {
    const [movies, setMovies] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [noResults, setNoResults] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchValue = searchParams.get('q');

    const handleSearch = (value) => {
        setSearchParams({q: value})
    }

    useEffect(()=>{
        const fetchSearchMovies = async () => {
            if(!searchValue) return;
        try{
            setLoader(true);
            setNoResults(false); // Скидаємо стан "немає результатів" перед новим запитом
            setMovies(null); // Очищаємо попередні результати
            setError(null); //Скидаємо помилки перед новим запитом
            const {data} = await getSearchMovies(searchValue);
            if(data.results.length === 0) {
                setNoResults(true);
            } else {
                setMovies(data.results);
                console.log(searchValue);
                console.log(data.results);
            }
        } catch(error){
            setError(error)
        } finally {
            setLoader(false);
        }
        }
        fetchSearchMovies()
    }, [searchValue]);

    console.log(searchValue);
  return (
    <div>
        <SearchForm onSubmit={handleSearch}/>
        {loader && <Loader/>}
        {movies !== null && <MovieList movies={movies}/>}
        {error || noResults && <ErrorMessage />}
        
    </div>
  )
}

export default MoviesPage