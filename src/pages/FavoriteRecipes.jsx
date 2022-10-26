import React, { useEffect, useState } from 'react';
import { getItem } from '../services/LocalStorageFuncs';
import Header from '../components/Header';

// const copy = require('clipboard-copy');

function FavoriteRecipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(getItem('favoriteRecipes'));
  }, []);

  console.log(recipes);

  return (
    <>
      <Header />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setType() }
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
        (recipes !== undefined && recipes.length > 0) && (
          <ul>
            {
              recipes?.map((dr, index) => (
                <li key={ dr.id }>
                  <img
                    src={ dr.image }
                    alt={ dr.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                  <p data-testid={ `${index}-horizontal-top-text` }>{ dr.category }</p>
                  <p data-testid={ `${index}-horizontal-name` }>{ dr.name }</p>
                  <p data-testid={ `${index}-horizontal-done-date` }>{ dr.doneDate }</p>
                  <button
                    type="button"
                    data-testid={ `${index}-horizontal-share-btn` }
                  >
                    Compartilhar
                  </button>
                  <button
                    type="button"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                  >
                    favoritar
                  </button>
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
