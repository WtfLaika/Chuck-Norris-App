import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { UserActionTypes } from "../redux/type";
import { useAppSelector } from "./../app/hooks";
import { store } from "./../index";

export const Header: React.FC = () => {
  const logo = useAppSelector((state): string => state.answer.logo);
  useEffect(() => {
    try {
      const response = axios
        .get("https://api.chucknorris.io/jokes/random")
        .then(async (response) => {
          store.dispatch({
            type: UserActionTypes.SET_LOGO,
            payload: response.data.icon_url,
          });
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <header>
      <div className="header-container">
        {logo.length > 0 && (
          <img src={logo} alt="chuck" className="chuck-logo" />
        )}
        <div>Chuck Norris</div>
      </div>
    </header>
  );
};
