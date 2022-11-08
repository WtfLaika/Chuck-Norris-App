import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../test-helpers/renderWithRouter';
import {Header} from './Header';
import {rootReducerInitialState} from '../redux/rootReducer';
import {screen} from '@testing-library/react';

describe('Header links Test', () => {
  test('main link test', async () => {
    await renderWithRouter(<Header />, {route: '/', initialState: rootReducerInitialState});
    const mainLink = screen.getByTestId('main-link');
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  test('memes link test', async () => {
    await renderWithRouter(<Header />, {route: '/', initialState: rootReducerInitialState});
    const memesLink = screen.getByTestId('memes-link');
    await userEvent.click(memesLink);
    expect(screen.getByTestId('memes-page')).toBeInTheDocument();
  });
  test('several navigations test', async () => {
    await renderWithRouter(<Header />, {route: '/', initialState: rootReducerInitialState});
    const memesLink = screen.getByTestId('memes-link');
    const mainLink = screen.getByTestId('main-link');
    await userEvent.click(memesLink);
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
