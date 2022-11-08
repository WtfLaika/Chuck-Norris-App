import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import App, {store} from './App';
import {Header} from './components/Header';
import {Category} from './components/Category';
import {Categories} from './components/Categories';
import {ECategoriesTypes} from './components/Categories';
import {renderWithRedux} from './test-helpers/renderWithRedux';
import {Footer} from './components/Footer';
import {renderWithRouter} from './test-helpers/renderWithRouter';
import {rootReducerInitialState} from './redux/rootReducer';

test('renders learn react link', async () => {
  const {getByText} = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/Chuck Norris/i)).toBeInTheDocument();
});
test('should render Header component', async () => {
  const component = await renderWithRouter(<Header />, {route: '/', initialState: rootReducerInitialState});

  expect(component).toMatchSnapshot();
});

describe('should render Category component', () => {
  it('should render Category with joke ', async () => {
    const category: string = 'animal';
    const component = await renderWithRedux(<Category category={category} type={ECategoriesTypes.JOKES} />);

    expect(component).toMatchSnapshot();
  });
  it('should render Category with joke ', async () => {
    const category: string = 'memes';
    const component = await renderWithRedux(<Category category={category} type={ECategoriesTypes.MEMES} />);

    expect(component).toMatchSnapshot();
  });
});

describe('should render Categories component', () => {
  it('should render Categories with jokes ', async () => {
    const categories = ['animal,career,celebrity'];
    const component = await renderWithRedux(<Categories categories={categories} type={ECategoriesTypes.JOKES} />);

    expect(component).toMatchSnapshot();
  });
  it('should render Categories with memes', async () => {
    const memes = ['memes,dankmemes,random'];
    const component = await renderWithRedux(<Categories categories={memes} type={ECategoriesTypes.MEMES} />);
    expect(component).toMatchSnapshot();
  });
});

describe('should render Footer component', () => {
  it('should render Footer with joke   ', async () => {
    const joke = 'ahhahah something so funny';
    const component = await renderWithRedux(<Footer data={joke} type={ECategoriesTypes.JOKES} />);
    expect(component).toMatchSnapshot();
  });
  it('should render Footer with meme', async () => {
    const memeImg = 'https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg';
    const component = await renderWithRedux(<Footer data={memeImg} type={ECategoriesTypes.MEMES} />);
    expect(component).toMatchSnapshot();
  });
});

describe('should render App component', () => {
  it('should render App  without props ', async () => {
    const component = await render(<App />);
    expect(component).toMatchSnapshot();
  });
});
