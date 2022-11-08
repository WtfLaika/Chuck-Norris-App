import React from 'react';
import {Category} from './Category';

interface ICategoryProps {
  type: ECategoriesTypes;
  categories: string[];
}

export enum ECategoriesTypes {
  JOKES = 'Jokes',
  MEMES = 'Memes',
}

export const Categories = ({type, categories}: ICategoryProps) => {
  return (
    <div className="categories">
      <div className="title">{type} Categories</div>
      <div className="categories-container">
        {categories.map((category, index) => {
          return <Category key={category} category={category} type={type} />;
        })}
      </div>
    </div>
  );
};
