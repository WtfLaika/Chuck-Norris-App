import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMainInitialState} from './type';

export const mainInitialState: IMainInitialState = {
  loading: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState: mainInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      return {...state, loading: action.payload};
    },
  },
});

export const {setLoading} = mainSlice.actions;

export default mainSlice.reducer;
