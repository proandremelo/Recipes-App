import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const search = 'search';

describe('Testando o componente SearchBar', () => {
  test('Testa os elementos sao renderizados', () => {
    renderWithRouter(<App />, '/drinks');
    const btnLupa = screen.getByTestId(`${search}-top-btn`);

    expect(btnLupa).toBeInTheDocument();

    userEvent.click(btnLupa);

    const input = screen.getByTestId(`${search}-input`);

    expect(input).toBeInTheDocument();

    const radios = screen.getAllByRole('radio');

    expect(radios.length).toBe(3);

    const btnSearch = screen.getByTestId(`exec-${search}-btn`);

    expect(btnSearch).toBeInTheDocument();
  });

  test('Testando funcionamento do SearchBar', async () => {
    renderWithRouter(<App />, '/drinks');
    const btnLupa = screen.getByTestId('search-top-btn');
    userEvent.click(btnLupa);
    const input = screen.getByTestId('search-input');
    const radios = screen.getAllByRole('radio');
    const btnSearch = screen.getByTestId('exec-search-btn');

    const cardImg = await screen.findByTestId('0-card-img', undefined, { timeout: 2000 });

    expect(radios.length).toBe(3);
    expect(cardImg).toBeInTheDocument();

    userEvent.type(input, 'A');
    userEvent.click(radios[1]);
    userEvent.click(btnSearch);

    const name = await screen.findByAltText('A1', undefined, { timeout: 2000 });
    expect(name).toBeInTheDocument();
  });

  test('Testando funcionamento do SearchBar', async () => {
    renderWithRouter(<App />, '/meals');
    const btnLupa = screen.getByTestId('search-top-btn');
    userEvent.click(btnLupa);
    const input = screen.getByTestId('search-input');
    const radios = screen.getAllByRole('radio');
    const btnSearch = screen.getByTestId('exec-search-btn');

    const cardImg = await screen.findByTestId('0-card-img', undefined, { timeout: 2000 });

    expect(radios.length).toBe(3);
    expect(cardImg).toBeInTheDocument();

    userEvent.type(input, 'chicken');
    userEvent.click(radios[1]);
    userEvent.click(btnSearch);

    const name = await screen.findByAltText('Chicken Handi', undefined, { timeout: 2000 });
    expect(name).toBeInTheDocument();
  });
});
