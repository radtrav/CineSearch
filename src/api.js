import axios from 'axios';
const API_KEY = "297cef65";
const OMDB_URL = "http://www.omdbapi.com";

export const searchMovies = async query => {
    const { data } = await axios(
        `${OMDB_URL}/?apikey=${API_KEY}&s=${query}`
    );

    return  data.Search;
};

export const fetchMovieById = async id => {
    const { data } = await axios(
        `${OMDB_URL}/?apikey=${API_KEY}&i=${id}&plot=full`
    );

    return data;
};

export const getPosterUrl = imdbID => `http://img.omdbapi.com/?i=${imdbID}&h=600&apikey=${API_KEY}`;