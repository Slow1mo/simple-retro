export interface ReducerState {
  user: string;
}

export const actions = {
  setUser: (user?: string) => ({ type: "SET_USER", user }),
  reset: () => ({ type: "RESET" }),
}

const initialState: ReducerState = {
  user: "Wonka"
};

export const mainReducer = (state= initialState, action: any) => {
  switch (action.type) {
    case actions.setUser().type:
      return { ...state, user: action.user };
      case actions.reset().type:
        return initialState;
      default:
        return initialState
  }
};
