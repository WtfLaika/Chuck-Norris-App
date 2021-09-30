import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { UserActionTypes } from "../redux/type";
import JokesService from "../services/Jokes.service";
import { useAppSelector } from "./../app/hooks";
import { store } from "./../index";

const { REACT_APP_JOKES_URL, REACT_APP_RANDOM } = process.env;

export const Header: React.FC = () => {
  const logo = useAppSelector((state): string => state.answer.logo);
  useEffect(() => {
    JokesService.requestDispatchtJoke(
      `${REACT_APP_JOKES_URL}${REACT_APP_RANDOM}`,
      UserActionTypes.SET_LOGO,
      "icon_url"
    );
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
