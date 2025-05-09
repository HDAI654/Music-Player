"use client";

import React, { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';

const Music = ({ audioUrl, songName, artist, album, genre }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = new Plyr(playerRef.current, {
        controls: [
          'play',
          'progress',
          'current-time',
          'duration',
          'mute',
          'download',
          'airplay',
        ],
        download: audioUrl,
      });
    }
  }, [audioUrl]);

  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm my-3">
            <div className="card-body p-4">
              <div className="song-info mb-4">
                <h3 className="h4 text-dark mb-3 text-wrap">Name: {songName}</h3>
                <div className="d-flex flex-wrap gap-2 mb-3 text-wrap">
                  <span className="badge bg-info text-dark text-wrap">Artist: {artist}</span>
                  <span className="badge bg-info text-dark text-wrap">Album: {album}</span>
                  <span className="badge bg-info text-dark text-wrap">Genre: {genre}</span>
                </div>
              </div>

              <audio ref={playerRef} controls>
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;