import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testando Header', () => {
  test('Testando rota profile', () => {
    renderWithRouter(<App />, '/profile');
    const profileName = screen.getByTestId('page-title');
    const profileIcon = screen.getByTestId('profile-top-btn');
    const btnDoneRecipes = screen.getByTestId('profile-done-btn');
    const btnFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const btnLogout = screen.getByTestId('profile-logout-btn');
    const radios = screen.getAllByRole('radio');

    expect(profileName).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
    expect(btnDoneRecipes).toBeInTheDocument();
    expect(btnFavoriteRecipes).toBeInTheDocument();
    expect(btnLogout).toBeInTheDocument();
    expect(radios.length).toBe(3);
  });

  test('Testando se ao clicar nos botoes o usuario é redirecionado corretamente! pt 1', () => {
    const { history } = renderWithRouter(<App />, '/profile');
    const btnDoneRecipes = screen.getByTestId('profile-done-btn');

    userEvent.click(btnDoneRecipes);

    expect(history.location.pathname).toBe('/done-recipes');
  });

  test('Testando se ao clicar nos botoes o usuario é redirecionado corretamente! pt 2', () => {
    const { history } = renderWithRouter(<App />, '/profile');
    const btnFavoriteRecipes = screen.getByTestId('profile-favorite-btn');

    userEvent.click(btnFavoriteRecipes);

    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  test('Testando se ao clicar nos botoes o usuario é redirecionado corretamente! pt 3', () => {
    const { history } = renderWithRouter(<App />, '/profile');
    const btnLogout = screen.getByTestId('profile-logout-btn');

    userEvent.click(btnLogout);

    expect(history.location.pathname).toBe('/');
  });

  test('Testa se o email aparece na pagina de profile', () => {
    const { history } = renderWithRouter(<App />, '/');

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btn = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'teste@gmail.com');
    userEvent.type(inputPassword, '1234567');

    userEvent.click(btn);

    act(() => {
      history.push('/profile');
    });

    const email = screen.getByTestId('profile-email');

    expect(email).toBeInTheDocument();
  });
});
