import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ITrack } from "../../types/spotify-playlist";
import { MdPlayArrow, MdOutlinePause } from "react-icons/md";
import "./songrow.css";
import { millisToMinutesAndSeconds } from "../../time-conversion";

interface ISongRowProps {
  track: ITrack;
  trackNumber: number;
}

const SongRow = ({ track, trackNumber }: ISongRowProps) => {
  const dispatch = useDispatch();
  const { selectedTrack } = useSelector<RootState, RootState["trackReducer"]>(
    (state) => state.trackReducer
  );

  return (
    <div
      className="songrow"
      onClick={() =>
        dispatch({ type: "SET_SELECTED_TRACK", payload: track.uri })
      }
    >
      <div className="songrow__misc">
        <div className="songrow__misc_number">{trackNumber}</div>
        <div className="songrow__misc_play">
          {selectedTrack === track.uri ? (
            <MdOutlinePause size={20} />
          ) : (
            <MdPlayArrow size={20} />
          )}
        </div>
      </div>
      <img className="songrow__album" src={track.album.images[0].url} alt="" />
      <div className="songrow__info">
        <h1 style={{ color: selectedTrack === track.uri ? "green" : "white" }}>
          {track.name}
        </h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
      <div className="songrow__album_name">
        <p>{track.album.name}</p>
      </div>
      <div className="songrow__duration">
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default SongRow;


{/* <div style={{flex:0.025}}>#</div>
<div style={{flex:0.5}}>TITLE</div>
<div style={{flex:0.4}}>ALBUM</div>
<div style={{flex:0.075}}><MdAccessTime/></div> */}