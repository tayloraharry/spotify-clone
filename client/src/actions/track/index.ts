export type SetSelectedTrackAction  = { type: "SET_SELECTED_TRACK", payload: string };

export type TrackActions =
| SetSelectedTrackAction

export const setSelectedTrack = (uri: string): SetSelectedTrackAction => ({
  type: "SET_SELECTED_TRACK",
  payload: uri,
});