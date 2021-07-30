import {useState} from 'react'
import { useFetch } from './Hooks'
import MoviesList from './MoviesList';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import { FaCircleNotch } from 'react-icons/fa';
require('dotenv').config();

const Browse = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const api_key = process.env.REACT_APP_API_KEY;
    const browse_api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${pageNumber}`;
    
    const HandlePageClick = ( {selected} ) => {
        setPageNumber(selected + 1);
    }

    const {movies, isLoading, error} = useFetch(browse_api);
    
    return (
        <div className='browse'>
            {error && <div className='error'>{error}</div> }
            {isLoading && <FaCircleNotch className='spinner'/> }

            {movies && <ReactPaginate
                previousLabel={'Previous'}
                previousClassName={'previous'}
                nextLabel={'Next'}
                nextClassName={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                containerClassName={'pagination'}
                pageClassName={'page-className'}
                activeClassName={'active'}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                pageCount='50'
                initialPage={0}
                onPageChange={HandlePageClick}
            />}
            
            <MoviesList movies={movies}/>
            {movies && <Footer />}
        </div>
    )
}

export default Browse
