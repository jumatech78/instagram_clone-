import React from 'react'
import './navbarstyles.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar_brand'>
                <img className='navbar_logo' src='/logo.png'/>
            </div>
            <div className='search_section'>
                <SearchIcon size={10} className='search_icon'/>
                <input className='search-input' placeholder='search'/>
            </div>
            <div className='navbar_icons'>
                <HomeIcon/>
                <SendIcon/>
                <AddIcon/>
                <ExploreIcon/>
                <FavoriteBorderIcon/>
            </div>
        </div>
    )
}

export default Navbar;