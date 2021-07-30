import { useFetch } from './Hooks'
import MoviesList from './MoviesList'
import Footer from './Footer';
import { FaCircleNotch } from 'react-icons/fa';
require('dotenv').config();

const Home = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    const api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
    const {movies, isLoading, error} = useFetch(api)
    
    return (
        <div className="home">
            <h2 className='section-title'>Popular Movies</h2>
            {error && <div className='error'>{error}</div> }
            {isLoading && <FaCircleNotch className='spinner'/> }
            {movies && <MoviesList movies={movies} />}
            {movies && <Footer />}
        </div>
    )
}

export default Home
