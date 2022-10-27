import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Done Recipes', () => {
  it.only('Continue Recipe', async () => {
    const { history } = renderWithRouter(<App />, '/drinks/15288');
    const btnfavorite = await screen.findAllByRole('button');
    userEvent.click(btnfavorite[1]);

    act(() => {
      history.push('/favorite-recipes');
    });

    const allBtn = screen.getByTestId('filter-by-all-btn');
    const mealsBtn = screen.getByTestId('filter-by-meal-btn');
    const drinksBtn = screen.getByTestId('filter-by-drink-btn');
    expect(allBtn).toBeInTheDocument();
    expect(mealsBtn).toBeInTheDocument();
    expect(drinksBtn).toBeInTheDocument();

    const image = await screen.findByTestId('0-horizontal-image');
    const name = await screen.findByTestId('0-horizontal-name');
    const date = await screen.findByTestId('0-horizontal-done-date');
    const button = await screen.findByTestId('0-horizontal-share-btn');
    const buttonFav = await screen.findByTestId('0-horizontal-favorite-btn');

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttonFav).toBeInTheDocument();

    userEvent.click(allBtn);
    userEvent.click(mealsBtn);
    userEvent.click(allBtn);
    userEvent.click(drinksBtn);
  });
});
