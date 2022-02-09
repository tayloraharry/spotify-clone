import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
import useAuth from "../../hooks/useAuth";
import { RootState } from "../../store";

interface IPlayerProps {
  trackUri?: string;
}

export default function Player({ trackUri }: IPlayerProps) {
  const [play, setPlay] = useState<boolean>(false);
  const { access_token } = useSelector<RootState, RootState["authReducer"]>(
    (state) => state.authReducer
  );
  const { selectedTrack } = useSelector<RootState, RootState["trackReducer"]>(
    (state) => state.trackReducer
  );
  
  useEffect(() => {
    setPlay(true);
  }, [selectedTrack]);
  
  if (!access_token) return null;
  return (
    <SpotifyPlayer
      token={access_token}
      showSaveIcon
      uris={selectedTrack ? [selectedTrack] : []}
      play={play}
      styles={{
        bgColor: 'black',
        sliderColor: 'green',
        color: 'white',
        sliderHandleColor: 'gray',
        trackArtistColor: 'gray',
        trackNameColor: 'gray',
      }}
      initialVolume={50}
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
    />
  );
}
