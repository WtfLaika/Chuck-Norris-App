import React from 'react';
import Chuck from '../assets/chuckImg.png';
import {ECategoriesTypes} from './Categories';

interface IFooterProps {
  type: ECategoriesTypes;
  data: string;
}

export const Footer = ({type, data}: IFooterProps) => {
  const placeHolder = `Choose a catagory to get Chuck's ${type === ECategoriesTypes.MEMES ? 'meme' : 'phrase'}`;
  return (
    <div className="phrase-container">
      <img src={Chuck} alt="Chuck" id="chuck_img" />
      <div className="phrase">
        {!!data && type === ECategoriesTypes.JOKES ? (
          data
        ) : !!data && type === ECategoriesTypes.MEMES ? (
          <img src={data} className="meme" />
        ) : (
          placeHolder
        )}
      </div>
    </div>
  );
};
