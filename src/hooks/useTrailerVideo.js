import { useEffect } from 'react'
import { API_options } from '../utils/constants';
import { addMovieTrailer } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux'

//fetch trailer video from TMDB api and updating the store with video data 
const useTrailerVideo = ({ movieId }) => {    
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options);
        const json = await data.json();
        
        const filterTrailers = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterTrailers.length? filterTrailers[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    } 
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}

export default useTrailerVideo;