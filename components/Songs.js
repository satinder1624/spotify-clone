import React from "react";
import { useRecoilState } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilState(playlistState);

  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playlist[0]?.tracks?.items.map((track, i) => (
        <div>
          <Song key={track.track.id} order={i} track={track} />
        </div>
      ))}
    </div>
  );
}

export default Songs;
