import axios from "axios";
import React from "react";
import { UserActionTypes } from "../redux/type";
import JokesService from "../services/Jokes.service";
import { store } from "./../index";

export interface Props {
  category?: string;
}
const { REACT_APP_JOKES_URL, REACT_APP_CATEGORY, REACT_APP_RANDOM } =
  process.env;

export const Category: React.FC<Props> = ({ category }) => {
  function clickHandler() {
    let url = `${REACT_APP_JOKES_URL}${REACT_APP_RANDOM}`;

    if (category !== "random") {
      url = `${REACT_APP_JOKES_URL}${REACT_APP_RANDOM}${REACT_APP_CATEGORY}${category}`;
    }
    JokesService.requestDispatchtJoke(url, UserActionTypes.SET_PHRASE, "value");
  }

  return (
    <button className="btn-light" onClick={clickHandler}>
      {category}
    </button>
  );
};
