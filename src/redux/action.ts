import socketIO from "../socket";
import { action } from "typesafe-actions";
import { Actions } from "./types";
import { Dispatch } from "redux";

export const connectAction = (url: string) => {
  return (dispatch: Dispatch) => {
    const onConnect = (status: boolean) => {
      if (status) {
        dispatch(action(Actions.SET_CONNECTED, true));
      } else {
        dispatch(action(Actions.SET_CONNECTED, false));
      }
    };
    const onAnyEvent = (eventName: string, eventData: any) => {
      const payload = {
        timeStamp: new Date().toLocaleTimeString(),
        eventName,
        eventData,
      };

      dispatch(action(Actions.UPDATE_RESULT, payload));
    };
    socketIO.init(url, onConnect, onAnyEvent);
  };
};

export const disconnectAction = () => {
  return (dispatch: Dispatch) => {
    socketIO.disconnect();

    dispatch(action(Actions.SET_CONNECTED, false));
  };
};

export const emitAction = (eventName: string, eventData: any) => {
  return (dispatch: Dispatch) => {
    socketIO.emit(eventName, eventData);
    const out = {
      timeStamp: new Date().toLocaleTimeString(),
      eventName,
      eventData,
    };
    dispatch(action(Actions.UPDATE_RESULT, out));
  };
};

export const deleteAction = () => {
  return (dispatch: Dispatch) => {
    dispatch(action(Actions.DELETE_RESULT));
  };
};

export const showModalAction = (show: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch(action(Actions.UPDATE_HELP_MODAL, show));
  };
};
