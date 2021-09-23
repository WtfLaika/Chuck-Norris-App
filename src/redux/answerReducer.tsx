import { ActionTypes, IInitialState, UserActionTypes } from "./type";

const intialState: IInitialState = {
  logo: "",
  categories: [],
  phrase: "",
};

export const answerReducer = (
  state = intialState,
  action: ActionTypes
): IInitialState => {
  switch (action.type) {
    case UserActionTypes.SET_PHRASE:
      return {
        ...state,
        phrase: action.payload,
      };
    case UserActionTypes.SET_LOGO:
      return {
        ...state,
        logo: action.payload,
      };
    case UserActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload, "random"],
      };

    default:
      return state;
  }
};
