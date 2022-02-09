import { ISpotifyPlaylist } from "../../types/spotify-playlist";
import { ISpotifyUserPlaylists } from "../../types/spotify-user-playlist";

export type SetUserPlaylistsAction  = { type: "SET_USER_PLAYLISTS", payload: ISpotifyUserPlaylists };
export type SetSelectedPlaylistAction  = { type: "SET_SELECTED_PLAYLIST", payload: ISpotifyPlaylist };

export type PlaylistActions =
| SetUserPlaylistsAction
| SetSelectedPlaylistAction

export const setUserPlaylists = (playlists: ISpotifyUserPlaylists): SetUserPlaylistsAction => ({
  type: "SET_USER_PLAYLISTS",
  payload: playlists,
});

export const setSelectedPlaylist = (playlist: ISpotifyPlaylist): SetSelectedPlaylistAction => ({
  type: "SET_SELECTED_PLAYLIST",
  payload: playlist,
});