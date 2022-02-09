import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Header from "../header";
import {
  MdPlayCircleFilled,
  MdOutlineFavorite,
  MdOutlineMoreHoriz,
  MdAccessTime
} from "react-icons/md";
import "./body.css";
import { spotifyClientId } from "../../constants";
import useAuth from "../../hooks/useAuth";
//@ts-ignore
import SpotifyWebApi from "spotify-web-api-node";
import SongRow from "../song-row";
import { ISpotifyPlaylist, ISpotifyPlaylistResult } from "../../types/spotify-playlist";

const spotifyApi = new SpotifyWebApi({
  clientId: spotifyClientId,
});

const Body = () => {
  const dispatch = useDispatch();
  const { selectedPlaylist } = useSelector<
    RootState,
    RootState["playlistReducer"]
  >((state) => state.playlistReducer);
  const [playlist, setPlaylist] = useState<ISpotifyPlaylist>();

  const { access_token } = useSelector<RootState, RootState["authReducer"]>(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (!access_token) return;
    spotifyApi.setAccessToken(access_token);
  }, [access_token]);

  useEffect(() => {
    if (!access_token || !selectedPlaylist) return;
    spotifyApi.getPlaylist(selectedPlaylist.id).then(
      (data: ISpotifyPlaylistResult) => {
        setPlaylist(data.body);
      },
      (err: any) => {
        console.log("Something went wrong!", err);
      }
    );
  }, [access_token, selectedPlaylist]);

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img
          src={selectedPlaylist?.images[0]?.url}
          alt=""
        />
        <div className="body__info-text">
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <MdPlayCircleFilled  className="body__shuffle" onClick={() => dispatch({ type: "SET_SELECTED_TRACK", payload: playlist?.tracks.items[0].track.uri })}/>
          <MdOutlineFavorite size={25} />
          <MdOutlineMoreHoriz />
        </div>
        <div style={{ fontSize: 12, display:'flex', alignItems:'center', marginLeft:20, marginRight:20, paddingLeft: 20, paddingRight: 20, color:'gray', borderBottom: '1px solid gray'}}>
          <div style={{flex:0.025}}>#</div>
          <div style={{flex:0.5}}>TITLE</div>
          <div style={{flex:0.4}}>ALBUM</div>
          <div style={{flex:0.075}}><MdAccessTime/></div>
        </div>
        {playlist?.tracks?.items?.map((item, index) => {
          return <SongRow key={item.track.id} trackNumber={index + 1} track={item.track} />
        })}
      </div>
    </div>
  );
};

export default Body;
