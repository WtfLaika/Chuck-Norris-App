import React, {useLayoutEffect} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createReduxStore} from './redux/rootReducer';
import MainService from './services/main.service';
import {FullScreenLoader} from './components/loader';
import {AppRouter} from './router/appRouter';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './components/Header';
import {setCategories} from './redux/answerSlice';

const {REACT_APP_JOKES_URL, REACT_APP_CATEGORIES} = process.env;

export const store = createReduxStore();
export const App = () => {
  useLayoutEffect(() => {
    MainService.requestGetData(`${REACT_APP_JOKES_URL}${REACT_APP_CATEGORIES}`, setCategories, '');
  }, []);

  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <FullScreenLoader />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
