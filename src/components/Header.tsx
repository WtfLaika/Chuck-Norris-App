import React from "react";
import { useEffect } from "react";
import { UserActionTypes } from "../redux/type";
import JokesService from "../services/Jokes.service";
import { useAppSelector } from "./../app/hooks";

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
          <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="chuck" className="chuck-logo" />
        <div>Chuck Norris</div>
      </div>
    </header>
  );
};
