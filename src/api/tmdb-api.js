import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmU1NjAxYzc3YTE3MmMxOGYwMWY5Y2RmOTc1MmFlNSIsIm5iZiI6MTcyOTMyNTY3NC4wODIxNDgsInN1YiI6IjY3MTM2NmQwZDViNzkyNmU5NDZmYTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nbS_2GrA_SkAMIA780gVZGDPaC6GPqMKDJCoci8GzaU';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });

export const getTrendingMovies = async () => {
 return await instance.get('/trending/all/day');
}

export const getSearchMovies = async (searchValue) => {
    const axiosOptions = {
        params: {
            query: searchValue,
            include_adult: false,
            language: 'en-US',
        }
    };

    return await instance.get('/search/movie', axiosOptions)

}

export const getMovieById = async (movie_id) => {
    const axiosOptions = {
        params: {
            // include_adult: false,
            language: 'en-US',
            page: 1,
        }
    };
    return await instance.get(`/movie/${movie_id}`, axiosOptions);
}

export const getImage = async () => {
    return instance.get('/configuration');
}


