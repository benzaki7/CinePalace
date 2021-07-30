import { useState, useRef } from 'react';
import { useOnClickOutside } from './Hooks';
import { Link } from 'react-router-dom'
import { FaBars, FaSearch } from 'react-icons/fa';
import SearchBar from './SearchBar'

const NavBar = () => {
    const [active, setActive] = useState(false);  // this state checks if menu is open
    const [open, setOpen] = useState(false);  // this state checks if search-bar is open
    const menuNode = useRef(); 
    const searchNode = useRef(); 

    const handleMenuClick = () => {
        setActive(!active)
    }
    const handleSearchClick = () => {
        setOpen(!open)
    }
    useOnClickOutside(menuNode, () => setActive(false));
    useOnClickOutside(searchNode, () => setOpen(false));

    return (
        <div className="navbar">
            <h1><Link to='/'>CinePalace</Link></h1>
            <div className="container">
                <div ref={searchNode} className="search-container">
                    <FaSearch onClick={handleSearchClick} className='search-icon' />
                    <SearchBar open={open} />
                </div>
                
                <div ref={menuNode}>
                    <div className={active ? 'links links-active': 'links'}>
                        <Link to="/" onClick={handleMenuClick} >Home</Link>
                        <Link to="/trending" onClick={handleMenuClick}>Trending</Link>
                        <Link to="/browse" onClick={handleMenuClick}>Browse</Link>
                    </div>
                    <FaBars className='menu-btn' onClick={handleMenuClick} />
                </div>
            </div>
        </div>
    )
}

export default NavBar
