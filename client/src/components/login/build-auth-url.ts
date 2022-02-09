import { spotifyClientId } from "../../constants";

const buildAuthUrl = (): string => {
  const base_url = "https://accounts.spotify.com/authorize";
  const redircet_uri = "http://localhost:3000";
  const scopes = ["streaming","user-read-email","user-read-private","user-library-read","user-library-modify","user-read-playback-state","user-modify-playback-state", "playlist-read-private"].join("%20");
  const auth_url = `${base_url}?client_id=${spotifyClientId}&response_type=code&redirect_uri=${redircet_uri}&scope=${scopes}`;
  return auth_url;
};

export default buildAuthUrl;