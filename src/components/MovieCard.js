import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className='md:w-56 w-32 pr-6 relative z-20'>
            <img className='rounded-lg' src={POSTER_CDN_URL + posterPath} alt='movie-card' />
        </div>
    )
}

export default MovieCard