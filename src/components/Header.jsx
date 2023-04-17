import React from 'react'
import './Header.css';

const Header = (props) => {
    return (
        <div className='navbar'>
            <p className='fs-1 text-white p-2'>{props.titulo}</p>
            <form className="d-flex p-2" role="search"  >
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    
                    />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Header