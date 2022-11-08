import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMemesInitialState} from './type';

export const memeInitialState: IMemesInitialState = {
  meme: '',
};

const memeSlice = createSlice({
  name: 'meme',
  initialState: memeInitialState,
  reducers: {
    setMeme(state, action: PayloadAction<string>) {
      return {
        ...state,
        meme: action.payload,
      };
    },
  },
});

export const {setMeme} = memeSlice.actions;
export default memeSlice.reducer;
