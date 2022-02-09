import { TrackActions } from "../../actions/track";

export interface ITrackState {
  selectedTrack: string | null;
}

export const trackReducer = (
  state: ITrackState = { selectedTrack: null },
  action: TrackActions
) => {
  switch (action.type) {
    case "SET_SELECTED_TRACK":
      return { ...state, selectedTrack: action.payload };
    default:
      return state;
  }
};