import { useEffect, useState } from "react";
//@ts-ignore
import SpotiftWebApi from "spotify-web-api-node";
import { spotifyClientId } from "../../constants";
import { ISpotifyUser, ISpotifyUserResult } from "../../types/spotify-user";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const spotifyApi = new SpotiftWebApi({
  clientId: spotifyClientId,
});

interface IUserProps {
  accessToken: string;
}

const User = () => {
  const { access_token } = useSelector<RootState, RootState["authReducer"]>(
    (state) => state.authReducer
  );
  const [user, setUser] = useState<ISpotifyUser | null>(null);

  useEffect(() => {
    if (!access_token) return;
    spotifyApi.setAccessToken(access_token);
  }, [access_token]);

  useEffect(() => {
    if (!access_token) return;
    spotifyApi
      .getMe()
      .then((data: ISpotifyUserResult) => {
        console.log(data);
        setUser(data.body);
      })
      .catch(() => {
        setUser(null);
      });
  }, [access_token]);

  if (!access_token || !user) {
    return null;
  }

  return (
    <div style={{ flex: 3, textAlign: "right", cursor:'pointer' }}>
      <img
        src={user.images[0].url}
        style={{ height: 40, width: 40, borderRadius: 100 }}
      />
      <span className="mx-2" style={{fontWeight:500}}>{user.display_name}</span>
    </div>
  );
}

export default User;