import {answerInitialState} from './answerSlice';
import {memeInitialState} from './memeSlice';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import answerSlice from './answerSlice';
import memeSlice from './memeSlice';
import mainSlice, {mainInitialState} from './mainSlice';

export const rootReducerInitialState = {answer: answerInitialState, meme: memeInitialState, main: mainInitialState};

export const rootReducer = combineReducers({
  answer: answerSlice,
  meme: memeSlice,
  main: mainSlice,
});

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
