import React, {useEffect} from 'react';
import {RootState, useAppSelector} from '../app/hooks';
import {Categories, ECategoriesTypes} from '../components/Categories';
import {Footer} from '../components/Footer';
import {setCategories} from '../redux/answerSlice';
import MainService from '../services/main.service';

const {REACT_APP_JOKES_URL, REACT_APP_CATEGORIES} = process.env;

export const MainScreen = () => {
  const categories = useAppSelector((state: RootState): string[] => state.answer.categories);
  const phrase = useAppSelector((state: RootState) => state.answer.phrase);

  useEffect(() => {
    MainService.requestGetData(`${REACT_APP_JOKES_URL}${REACT_APP_CATEGORIES}`, setCategories, '');
  }, []);
  return (
    <div data-testid={'main-page'}>
      <Categories type={ECategoriesTypes.JOKES} categories={categories} />
      <Footer type={ECategoriesTypes.JOKES} data={phrase} />
    </div>
  );
};
