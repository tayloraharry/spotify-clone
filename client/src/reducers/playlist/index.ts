import { PlaylistActions } from "../../actions/playlist";
import { ISpotifyPlaylist } from "../../types/spotify-playlist";
import { ISpotifyUserPlaylists } from "../../types/spotify-user-playlist";

export interface IPlaylistState {
  userPlaylists: ISpotifyUserPlaylists | null;
  selectedPlaylist: ISpotifyPlaylist | null;
}

export const playlistReducer = (
  state: IPlaylistState = { userPlaylists: null, selectedPlaylist: null },
  action: PlaylistActions
) => {
  switch (action.type) {
    case "SET_USER_PLAYLISTS":
      return { ...state, userPlaylists: action.payload };
    case "SET_SELECTED_PLAYLIST":
      return { ...state, selectedPlaylist: action.payload }
    default:
      return state;
  }
};