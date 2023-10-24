import React from "react";

const Search = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input className="b--green ba pa3 bg-light-blue" type="search" placeholder="Search here" onChange={searchChange} />
        </div>
    );
}

export default Search;