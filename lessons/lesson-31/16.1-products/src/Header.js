import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav">
            <Link to='/'>HomePage</Link>
            <Link to='/products'>Products</Link>
        </div>
    );
}

export default Header;
