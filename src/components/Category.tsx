import axios from "axios";
import React from "react";
import { UserActionTypes } from "../redux/type";
import { store } from "./../index";

export interface Props {
  category?: string;
}

export const Category: React.FC<Props> = ({ category }) => {
  
  function clickHandler() {
    if (category === "random") {
      try {
        const res = axios
          .get("https://api.chucknorris.io/jokes/random")
          .then((res) => {
            return store.dispatch({
              type: UserActionTypes.SET_PHRASE,
              payload: res.data.value,
            });
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = axios
          .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
          .then((res) => {
            return store.dispatch({
              type: UserActionTypes.SET_PHRASE,
              payload: res.data.value,
            });
          });
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <button className="btn-light" onClick={clickHandler}>
      {category}
    </button>
  );
};
