import React from 'react';
import Logo from './logo.png';



const Header = () => {
    return(
        <header>
            <img src={Logo} className="logo" alt="" />
            <nav className="main-nav">
                <a href="">Живопись</a>
                <a href="">Архитектура</a>
                <a href="">Литература</a>
                <a href="">Скульптура</a>
                <a href="">О нас</a>
            </nav>
        </header>
            
    )
}

export default Header;