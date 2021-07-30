import { useFetch } from './Hooks'
import MoviesList from './MoviesList'
import { FaCircleNotch } from 'react-icons/fa';
import Footer from './Footer';
require('dotenv').config();

const Trending = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    const trending_api = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}` ;
    const {movies, isLoading, error} = useFetch(trending_api)

    return (
        <div className="trending">
            <h2 className='section-title'>Trending Movies</h2>
            {error && <div className='error'>{error}</div> }
            {isLoading && <FaCircleNotch className='spinner'/> }
            {movies && <MoviesList movies={movies} />}
            {movies && <Footer />}
        </div>
    )
}

export default Trending
