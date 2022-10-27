import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

import requisition from '../utils/requisition';

function SearchBar() {
  const { inputText, setDrinksFilter, setMealsFilter } = useContext(RecipesContext);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (history.location.pathname.includes('meals')) {
      setUrl('themealdb');
    } else if (history.location.pathname.includes('drinks')) {
      setUrl('thecocktaildb');
    }
  }, [url, history.location.pathname]);

  const getURL = (search, type, value) => `https://www.${url}.com/api/json/v1/1/${search}.php?${type}=${value}`;

  const handleOnChange = ({ target: { value } }) => setInput(value);

  const filterDrink = (info, path, MAX_NUMBER) => {
    if (path === '/drinks' && info.drinks !== null) {
      const drink = info.drinks[0].idDrink;

      if (info.drinks.length === 1) {
        history.push(`/drinks/${drink}`);
      } else if (info.drinks.length > 1) {
        setDrinksFilter(info.drinks.filter((_e, index) => index < MAX_NUMBER));
      }
      return;
    }

    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  const filterMeal = (info, path, MAX_NUMBER) => {
    if (path === '/meals' && info.meals !== null) {
      const meal = info.meals[0].idMeal;

      if (info.meals.length === 1) {
        history.push(`/meals/${meal}`);
      } else if (info.meals.length > 1) {
        setMealsFilter(info.meals.filter((_e, index) => index < MAX_NUMBER));
      }
      return;
    }

    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  const pushLink = (info) => {
    const path = location.pathname;

    if (info !== undefined) {
      const MAX_NUMBER = 12;
      if (path === '/drinks') filterDrink(info, path, MAX_NUMBER);
      else filterMeal(info, path, MAX_NUMBER);
    }
  };

  const handleOnClick = async () => {
    if (input === 'name-search') {
      const result = await requisition(getURL('search', 's', inputText));
      setData(result);
      pushLink(result);
    } else if (input === 'ingredient') {
      const result = await requisition(getURL('filter', 'i', inputText));
      setData(result);
      pushLink(result);
    } else if (input === 'first-letter' && inputText.length <= 1) {
      const result = await requisition(getURL('search', 'f', inputText));
      setData(result);
      pushLink(result);
    } else if (inputText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      setData([]);
    }
  };

  return (
    <div>
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          name="btn-radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          id={ data }
          onChange={ handleOnChange }
        />
      </label>
      <label htmlFor="name-search">
        Name
        <input
          type="radio"
          name="btn-radio"
          data-testid="name-search-radio"
          value="name-search"
          onChange={ handleOnChange }
        />
      </label>
      <label htmlFor="first-letter">
        First letter
        <input
          type="radio"
          name="btn-radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ handleOnChange }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleOnClick }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
