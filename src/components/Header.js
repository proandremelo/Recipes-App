import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import HeaderStyle from '../styles/HeaderStyle';

function Header() {
  const [title, setTitle] = useState('');
  const [searchInput, setSearchInput] = useState(false);
  const history = useHistory();
  const { handleInput } = useContext(RecipesContext);

  function handleClickDisable() {
    setSearchInput(!searchInput);
  }

  useEffect(() => {
    const { pathname } = history.location;
    switch (pathname) {
    case '/meals':
      return setTitle('Meals');
    case '/drinks':
      return setTitle('Drinks');
    case '/profile':
      return setTitle('Profile');
    case '/done-recipes':
      return setTitle('Done Recipes');
    case '/favorite-recipes':
      return setTitle('Favorite Recipes');
    default:
      return pathname;
    }
  }, [history.location, setTitle]);

  return (
    <HeaderStyle>
      <Link to="/profile">
        <img
          className="icon-header"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Icone de perfil"
        />
      </Link>
      {
        (history.location.pathname === '/meals'
        || history.location.pathname === '/drinks')
          && (
            <button
              className="icon-search"
              type="button"
              onClick={ handleClickDisable }
            >
              <img
                data-testid="search-top-btn"
                src={ searchIcon }
                alt="Icone de pesquisa"
              />
            </button>
          )
      }
      {
        searchInput && <input
          type="text"
          name="search"
          data-testid="search-input"
          onChange={ handleInput }
        />
      }
      <h2 data-testid="page-title">{title}</h2>
      <SearchBar />
    </HeaderStyle>
  );
}

export default Header;
