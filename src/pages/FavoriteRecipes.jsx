import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import heartBlack from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import RecipesContext from '../context/RecipesContext';

const copy = require('clipboard-copy');

function FavoriteRecipes() {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(RecipesContext);
  const [type, setType] = useState('');
  const [clipboard, setClipBoard] = useState();

  const clickClipBoard = async (pathname) => {
    try {
      setClipBoard(true);
      const url = `http://localhost:3000${pathname}`;
      await copy(url);
    } catch (error) {
      console.log(error);
      setClipBoard(false);
    }
  };

  const removeFavorite = (id) => {
    setFavoriteRecipes(favoriteRecipes.filter((e) => +e.id !== +id));
  };

  return (
    <>
      <Header />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setType('') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ () => setType('meal') }
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setType('drink') }
      >
        Drinks
      </button>
      {
        (favoriteRecipes !== undefined && favoriteRecipes.length > 0) && (
          <ul>
            {
              favoriteRecipes?.filter((e) => e.type.includes(type))
                .map((dr, index) => (
                  <li key={ dr.id }>
                    <img
                      src={ dr.image }
                      alt={ dr.name }
                      data-testid={ `${index}-horizontal-image` }
                    />
                    <p data-testid={ `${index}-horizontal-top-text` }>{ dr.category }</p>
                    <p data-testid={ `${index}-horizontal-name` }>{ dr.name }</p>
                    <p data-testid={ `${index}-horizontal-done-date` }>{ dr.doneDate }</p>
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      {
                        dr.type === 'meal'
                          ? `${dr.nationality} - ${dr.category}`
                          : `${dr.alcoholicOrNot}`
                      }
                    </p>
                    <button
                      type="button"
                      onClick={ () => clickClipBoard(`/${dr.type}s/${dr.id}`) }
                    >
                      <img
                        src={ shareIcon }
                        alt="Compartilhar"
                        data-testid={ `${index}-horizontal-share-btn` }
                      />
                    </button>

                    <button
                      type="button"
                      onClick={ () => removeFavorite(dr.id) }
                    >
                      <img
                        src={ heartBlack }
                        alt="Favoriatr"
                        data-testid={ `${index}-horizontal-favorite-btn` }
                      />
                    </button>

                    { clipboard && <p>Link copied!</p>}
                  </li>
                ))
            }
          </ul>
        )
      }
    </>
  );
}

export default FavoriteRecipes;
