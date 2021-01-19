import { createStore, applyMiddleware } from "redux";
import { appReducer } from "./reducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const logger = createLogger();
let middlewares: any = [];

if (process.env.NODE_ENV === "development") {
  middlewares = [...middlewares, thunk, logger];
} else {
  middlewares = [...middlewares, thunk];
}
const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
