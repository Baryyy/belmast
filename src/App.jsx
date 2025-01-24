import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

const App = () => {
    const [isVisibleTitle, setIsVisibleTitle] = useState(false);
    const [isMoved, setIsMoved] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClick = () => {
      setIsMoved(true);
      setIsVisible(false);
    };
  
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
        setIsVisibleTitle(true);
    }, [])



    return(
        <div className='container'>
            <section className='landing-page'>
                <h2 className={isVisibleTitle ? 'title' : ''}>Белорусское искусство и <br /> культура</h2>
                <ion-icon  className={`arrow-down ${isMoved ? 'moved' : ''} ${isVisible ? '' : 'hidden'}`}
                 name="chevron-down-outline"
                onClick={handleClick}>
                </ion-icon>
            </section>
            <div className='content'>
                
            </div>
            
        </div>
    )
}

export default App;
