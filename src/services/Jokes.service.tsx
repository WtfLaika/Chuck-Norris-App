import axios from "axios";
import { ActionTypes, UserActionTypes } from "../redux/type";
import { store } from "./../index";

export type IActionType =
  | UserActionTypes.SET_CATEGORIES
  | UserActionTypes.SET_LOGO
  | UserActionTypes.SET_PHRASE;

class JokesService {
  requestDispatchtJoke(
    url: string,
    actionType: IActionType,
    resKey: string
  ): void {
    try {
      const response = axios(url).then((response: any) => {
        let myRes = response.data[resKey];
        if (resKey === "") myRes = response.data;
        return store.dispatch({
          type: actionType,
          payload: myRes,
        });
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new JokesService();
