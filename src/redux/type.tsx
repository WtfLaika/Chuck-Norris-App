export interface IInitialState {
  logo: string;
  categories: string[] | [];
  phrase: string;
}

export enum UserActionTypes {
  SET_PHRASE = "SET_PHRASE",
  SET_LOGO = "SET_LOGO",
  SET_CATEGORIES = "SET_CATEGORIES",
}

export interface SetPhrase {
  type: UserActionTypes.SET_PHRASE;
  payload: string;
}

export interface SetLogo {
  type: UserActionTypes.SET_LOGO;
  payload: string;
}

export interface SetCategories {
  type: UserActionTypes.SET_CATEGORIES;
  payload: string[];
}

export type ActionTypes = SetPhrase | SetLogo | SetCategories;
