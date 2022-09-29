import React from "react";
import { useEffect } from "react";
import { UserActionTypes } from "../redux/type";
import JokesService from "../services/Jokes.service";
import { useAppSelector } from "./../app/hooks";

const { REACT_APP_GET_ICON_URL } = process.env;

export const Header: React.FC = () => {
  const logo = useAppSelector((state): string => state.answer.logo);
  console.log("url",REACT_APP_GET_ICON_URL)
  useEffect(() => {
    JokesService.requestDispatchtJoke(
      `${REACT_APP_GET_ICON_URL}`,
      UserActionTypes.SET_LOGO,
      "url"
    );
  }, []);
  return (
    <header>
      <div className="header-container">
          <img src={logo} alt="chuck" className="chuck-logo" />
        <div>Chuck Norris</div>
      </div>
    </header>
  );
};
