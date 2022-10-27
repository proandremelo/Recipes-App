// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './helpers/renderWithRouter';
// import App from '../App';
// // import { act } from 'react-dom/test-utils';

// describe('Done Recipes', () => {
//   it.only('Continue Recipe', async () => {
//     const { history, debug } = renderWithRouter(<App />, '/drinks/15288');
//     const btnfavorite = await screen.findAllByRole('button');
//     userEvent.click(btnfavorite[1]);

//     act(() => {
//       history.push('/profile');
//     });

//     const allBtn = screen.getByTestId('filter-by-all-btn');
//     const mealsBtn = screen.getByTestId('filter-by-meal-btn');
//     const drinksBtn = screen.getByTestId('filter-by-drink-btn');
//     expect(allBtn).toBeInTheDocument();
//     expect(mealsBtn).toBeInTheDocument();
//     expect(drinksBtn).toBeInTheDocument();
//   });
// });
