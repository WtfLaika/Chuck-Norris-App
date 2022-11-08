import React from 'react';
import {RootState, useAppSelector} from '../app/hooks';
import {Categories, ECategoriesTypes} from '../components/Categories';
import {Footer} from '../components/Footer';
import {memesCategories} from '../constants/memesCategories';

export const MemesScreen = () => {
  const {meme} = useAppSelector((state: RootState) => state.meme);

  return (
    <div data-testid={'memes-page'}>
      <Categories type={ECategoriesTypes.MEMES} categories={memesCategories} />
      <Footer type={ECategoriesTypes.MEMES} data={meme} />
    </div>
  );
};
