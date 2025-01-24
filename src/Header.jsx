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
                <a onClick={() => {}}>живопись</a>
                <a onClick={() => {}}>архитектура</a>
                <a onClick={() => {}}>литература</a>
                <a onClick={() => {}}>скульптура</a>
            </nav>
        </header>    
    )
}

export default Header;