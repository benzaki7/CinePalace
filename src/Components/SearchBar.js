import { useState} from "react";
import { Redirect } from "react-router-dom";

const SearchBar = ({open}) => {
    const [search, setSearch] = useState('')   
    const [searchDebounce, setSearchDebounce] = useState('');
    function handleSearch(e) {
        e.preventDefault();
        if(search && search !== '') {
            setSearchDebounce(search);
        }
        setSearch('') 
    }

    return (
        <div className={open ? 'search-bar search-active' : 'search-bar'}>
            <form className="form" onSubmit={handleSearch}>
                <input type="text" placeholder="Quick Search" className="search" 
                value={search} onChange={(e) => setSearch(e.target.value)}  />
                
                {searchDebounce ? <Redirect to={{pathname: '/movies', state: {
                    searchTerm: searchDebounce,
                }}} />
                : '' }
                </form>
        </div>
    )
}

export default SearchBar
