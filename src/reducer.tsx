export interface ReducerState {
  user: string;
}

export const SET_USER = "SET_USER";
export const RESET = "RESET";

export const initialMainReducerState = {
  user: ""
};

export const mainReducer = (state: ReducerState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case RESET:
      return initialMainReducerState;
    default:
      throw new Error("Unexpected action");
  }
};
