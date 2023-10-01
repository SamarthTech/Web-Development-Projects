import React from 'react'
import "../asset/css/SearchSong.css"


const SearchSong = () => {
    return (
        <div className='searchbar'>
            <div className="input-group">
                <input type="text" className="form-control input" aria-label="Text input with segmented dropdown button" />
                <div className="input-group-append button">
                    <button type="button" className="btn btn-outline-success">&nbsp; Search &nbsp;</button>
                </div>
            </div>
        </div>
    )
}

export default SearchSong
