import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Recipes from './pages/Recipes';
import RecipesProvider from './context/RecipesProvider';

import Profile from './pages/Profile';
import Login from './pages/Login';
import RecipeDetails from './pages/RecipeDetails';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route
          exact
          path="/drinks"
          render={ (props) => <Recipes { ...props } name="drinks" /> }
        />

        <Route
          exact
          path="/meals"
          render={ (props) => <Recipes { ...props } name="meals" /> }
        />

        <Route
          exact
          path="/meals/:id"
          render={ (props) => <RecipeDetails { ...props } type="meals" /> }
        />

        <Route
          exact
          path="/drinks/:id"
          render={ (props) => <RecipeDetails { ...props } type="drinks" /> }
        />
        <Route path="/meals/:id/in-progress" component={ RecipeInProgress } />
        <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
