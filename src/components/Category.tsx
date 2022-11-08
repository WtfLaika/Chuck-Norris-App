import React from 'react';
import {setPhrase} from '../redux/answerSlice';
import {setMeme} from '../redux/memeSlice';
import MainService from '../services/main.service';
import {ECategoriesTypes} from './Categories';

export interface Props {
  category?: string;
  type: ECategoriesTypes;
}
const {REACT_APP_JOKES_URL, REACT_APP_CATEGORY, REACT_APP_RANDOM, REACT_APP_MEMES_URL} = process.env;

export const Category = ({category, type}: Props) => {
  const clickHandler = async () => {
    try {
      if (type === ECategoriesTypes.JOKES) {
        let url = `${REACT_APP_JOKES_URL}${REACT_APP_RANDOM}`;

        if (category !== 'random') {
          url = `${REACT_APP_JOKES_URL}${REACT_APP_RANDOM}${REACT_APP_CATEGORY}${category}`;
        }
        await MainService.requestGetData(url, setPhrase, 'value');
      } else if (type === ECategoriesTypes.MEMES) {
        let url = `${REACT_APP_MEMES_URL}${category}`;
        await MainService.requestGetData(url, setMeme, 'url');
      }
    } finally {
    }
  };

  return (
    <button className="btn-light" onClick={clickHandler}>
      {category}
    </button>
  );
};
