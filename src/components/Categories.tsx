import axios from "axios";
import React, {
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import { useAppSelector } from "../app/hooks";
import { UserActionTypes } from "../redux/type";
import { store } from "./../index";
import { Category } from "./Category";

export const Categories: React.FC = () => {
  const categories: string[] = useAppSelector(
    (state: any): string[] => state.answer.categories
  );

  useEffect(() => {
    const res = axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => {
        store.dispatch({
          type: UserActionTypes.SET_CATEGORIES,
          payload: res.data,
        });
      });
  }, []);
  return (
    <div className="categories">
      <div className="title">Categories</div>
      <div className="categories-container">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <Category key={category} category={category}  />
            );
          })}
      </div>
    </div>
  );
};
