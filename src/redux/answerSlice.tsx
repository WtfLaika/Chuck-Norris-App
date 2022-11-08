import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAnswerInitialState} from './type';

export const answerInitialState: IAnswerInitialState = {
  logo: '',
  categories: [],
  phrase: '',
};

const answerSlice = createSlice({
  name: 'answer',
  initialState: answerInitialState,
  reducers: {
    setPhrase(state, action: PayloadAction<string>) {
      return {...state, phrase: action.payload};
    },
    setLogo(state, action: PayloadAction<string>) {
      return {...state, logo: action.payload};
    },
    setCategories(state, action: PayloadAction<string[]>) {
      return {...state, categories: [...action.payload, 'random']};
    },
  },
});

export const {setPhrase, setLogo, setCategories} = answerSlice.actions;
export default answerSlice.reducer;

