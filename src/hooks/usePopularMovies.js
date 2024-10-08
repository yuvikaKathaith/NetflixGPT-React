import { API_options } from '../utils/constants'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

// fetch data from TMDB API and update store
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies)
    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect( () => {
        !popularMovies && getPopularMovies();
    }, []);
}
export default usePopularMovies;