import React from 'react';
import ChuckIcon from '../assets/chuck-norris.png';
import {Link, useLocation} from 'react-router-dom';

export const Header = () => {
  const {pathname} = useLocation();

  return (
    <header>
      <div className="header-container">
        <img src={ChuckIcon} alt="chuck" className="chuck-logo" />
        <div>Chuck Norris</div>
        <Link className={`btn-header ${pathname === '/' && 'btn-header-slct'}`} to="/" data-testid="main-link">
          Jokes
        </Link>
        <Link
          className={`btn-header ${pathname === '/memes' && 'btn-header-slct'}`}
          to="/memes"
          data-testid="memes-link">
          Memes
        </Link>
      </div>
    </header>
  );
};
