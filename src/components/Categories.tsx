import axios from "axios";
import React, {
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import { useAppSelector } from "../app/hooks";
import { UserActionTypes } from "../redux/type";
import JokesService from "../services/Jokes.service";
import { Category } from "./Category";
const { REACT_APP_JOKES_URL, REACT_APP_CATEGORIES } = process.env;

export const Categories: React.FC = () => {
  const categories: string[] = useAppSelector(
    (state: any): string[] => state.answer.categories
  );

  useEffect(() => {
    JokesService.requestDispatchtJoke(
      `${REACT_APP_JOKES_URL}${REACT_APP_CATEGORIES}`,
      UserActionTypes.SET_CATEGORIES,
      ""
    );
  }, []);
  return (
    <div className="categories">
      <div className="title">Categories</div>
      <div className="categories-container">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return <Category key={category} category={category} />;
          })}
      </div>
    </div>
  );
};
