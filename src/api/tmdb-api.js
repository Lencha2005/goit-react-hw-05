import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmU1NjAxYzc3YTE3MmMxOGYwMWY5Y2RmOTc1MmFlNSIsIm5iZiI6MTcyOTMyNTY3NC4wODIxNDgsInN1YiI6IjY3MTM2NmQwZDViNzkyNmU5NDZmYTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nbS_2GrA_SkAMIA780gVZGDPaC6GPqMKDJCoci8GzaU';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });

const axiosOptions = {
    params: {
        include_adult: false,
        language: 'en-US', 
    }
}

export const getTrendingMovies = async () => {
 return await instance.get('/trending/movie/day', axiosOptions);
}

export const getSearchMovies = async (searchValue) => {
    axiosOptions.params.query = searchValue;

    return await instance.get('/search/movie', axiosOptions)
}

export const getMovieById = async (movie_id) => {
    return await instance.get(`/movie/${movie_id}`, axiosOptions);
}

export const getMovieCredits = async (movie_id) => {
    return await instance.get(`/movie/${movie_id}/credits`, axiosOptions);
}

export const getMovieReviews = async (id) => {
    return await instance.get(`/movie/${id}/reviews`, axiosOptions);
}

