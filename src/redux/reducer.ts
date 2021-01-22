import { Actions } from "./types";

interface State {
  connected: boolean;
  showHelpModal: boolean;
  result: {
    timeStamp: any;
    eventName: string;
    eventData: any;
  }[];
}

const initialState: State = {
  connected: false,
  showHelpModal: false,
  result: [],
};

export const appReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case Actions.SET_CONNECTED:
      return { ...state, connected: action.payload };
    case Actions.UPDATE_HELP_MODAL:
      return { ...state, showHelpModal: action.payload };
    case Actions.UPDATE_RESULT:
      const res = [...state.result, action.payload];
      return { ...state, result: res };
    case Actions.DELETE_RESULT:
      return {
        ...state,
        result: [],
      };
    default:
      return state;
  }
};
