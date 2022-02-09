import { createStore } from "redux";
import { combineReducers } from "redux";

import { authReducer } from "./reducers/auth";
import { playlistReducer } from "./reducers/playlist";
import { trackReducer } from "./reducers/track";

var combinedReducers = combineReducers({
  trackReducer,
  playlistReducer,
  authReducer,
});

export const store = createStore(combinedReducers);
export type RootState = ReturnType<typeof combinedReducers>;
