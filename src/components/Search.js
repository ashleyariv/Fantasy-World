import React from 'react'

function Search({searchInput, setSearchInput}) {
    return (
        <div id='search'>
            <label htmlFor='search'></label>
            <input 
                type='text'
                name='search'
                placeholder='What book are you looking for?'
                value={searchInput} onChange={event => setSearchInput(event.target.value)}
            />
            <button> 🔍 </button>
        </div>
    )
}

export default Search