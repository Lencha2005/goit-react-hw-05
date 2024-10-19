import React, { useEffect, useState } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchMovies } from '../../api/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
    const [movies, setMovies] = useState(null);
    // const [searchValue, setSearchValue] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchValue = searchParams.get('q');

    const handleSearch = (value) => {
        // setSearchValue(value);
        setSearchParams({q: value})

    }

    useEffect(()=>{
        const fetchSearchMovies = async () => {
            if(!searchValue) return;
        try{
            setLoader(true);
            const {data} = await getSearchMovies(searchValue);
            setMovies(data.results);
            console.log(searchValue);
            console.log(data.results);

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
        {movies !== null && <MovieList movies={movies}/>}
    </div>
  )
}

export default MoviesPage