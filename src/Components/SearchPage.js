import { useFetch } from './Hooks'
import {useState} from 'react'
import { useLocation } from "react-router-dom"
import MoviesList from './MoviesList';
import Footer from './Footer';
import ReactPaginate from 'react-paginate';
import { FaCircleNotch } from 'react-icons/fa';
require('dotenv').config();

const SearchPage = () => {
    const location = useLocation()
    const {searchTerm} = location.state
    const [pageNumber, setPageNumber] = useState(1);
    const api_key = process.env.REACT_APP_API_KEY;
    const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query="${searchTerm}&page=${pageNumber}`
    
    const HandlePageClick = ( {selected} ) => {
        setPageNumber(selected + 1);
    }

    const {movies, results, isLoading, error} = useFetch(search_api)

    return (
        <div className=" search-page">
            {error && <div className='error'>{error}</div> }
            {isLoading && <FaCircleNotch className='spinner'/> }
            {results > 20 && <ReactPaginate
                previousLabel={'previous'}
                previousClassName={'previous'}
                nextLabel={'next'}
                nextClassName={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                containerClassName={'pagination'}
                pageClassName={'page-className'}
                activeClassName={'active'}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                pageCount={results && results / 20}
                initialPage={0}
                onPageChange={HandlePageClick}
            />}
            <MoviesList movies={movies}/>
            {movies && <Footer />}
        </div>
    )
}

export default SearchPage
