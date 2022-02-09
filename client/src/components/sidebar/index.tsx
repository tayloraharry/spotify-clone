import { useEffect } from "react";
import SidebarOption from "./sidebar-option";
import { BiLibrary, BiHome, BiSearch } from "react-icons/bi";
//@ts-ignore
import SpotifyWebApi from "spotify-web-api-node";

import "./sidebar.css";
import { spotifyClientId } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import useAuth from "../../hooks/useAuth";

const iconSize = 20;

const spotifyApi = new SpotifyWebApi({
  clientId: spotifyClientId,
});

const Sidebar = () => {
  const dispatch = useDispatch();
  const { code } = useSelector<RootState, RootState["authReducer"]>(
    (state) => state.authReducer
  );
  const { userPlaylists } = useSelector<
    RootState,
    RootState["playlistReducer"]
  >((state) => state.playlistReducer);
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getUserPlaylists().then(
      (data: any) => {
        console.log(data);
        dispatch({
          type: "SET_USER_PLAYLISTS",
          payload: data.body,
        });
      },
      (err: any) => {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken]);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={() => <BiHome size={iconSize} />} />
      <SidebarOption title="Search" Icon={() => <BiSearch size={iconSize} />} />
      <SidebarOption
        title="Your Library"
        Icon={() => <BiLibrary size={iconSize} />}
      />
      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />
      {userPlaylists &&
        userPlaylists.items.map((playlist) => (
          <SidebarOption
            key={playlist.id}
            title={playlist.name}
            onSelect={() =>
              dispatch({ type: "SET_SELECTED_PLAYLIST", payload: playlist })
            }
          />
        ))}
    </div>
  );
};

export default Sidebar;
