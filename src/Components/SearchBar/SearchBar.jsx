import React, { useState } from 'react'
import search_icon from '../../assets/search.png'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm,setSearchTerm]=useState('');

    const navigate= useNavigate();

    const handleSubmit = () => {
        if (searchTerm.trim()) {
          navigate(`/search/${searchTerm}`);  // ✅ use backticks
          setSearchTerm('');
        }
    }
  return (
    <div className="nav-middle flex-div">
        <div className="search-box flex-div">
            <input type="text" placeholder='Search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} 
            onKeyDown={(e)=>{
                if (e.key === 'Enter') {
                    handleSubmit();  
            }
            }}/>
                <img src={search_icon} alt="" onSubmit={handleSubmit}/>

        </div>
    </div>
  )
}

export default SearchBar