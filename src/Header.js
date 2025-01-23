import React from 'react';
import Logo from './logo.png';



const Header = () => {
    return(
        <header>
            <div className='icon'>
                <img src={Logo} className="logo" alt="" />
                <h1>белмаст</h1>
            </div>
            <nav className="main-nav">
                <a href="#">живопись</a>
                <a href="#">архитектура</a>
                <a href="#">литература</a>
                <a href="#">скульптура</a>
            </nav>
        </header>    
    )
}

export default Header;