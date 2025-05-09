"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Music from './music';

const Musics = () => {
  const [musics, setMusics] = useState([1, 2, 3, 4, 5]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const res = await axios.get('https://67e65b106530dbd3110fa1f8.mockapi.io/songs/song');
        setMusics(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error in etting data', error);
        setIsLoading(false);
      }
    };

    fetchMusics();
  }, []);

  return (
    <>
      {isLoading
        ? musics.map((index) => (
            <div key={index} className="container-fluid p-0">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="card shadow-sm my-3" aria-hidden="true">
                    <div className="card-body p-4">
                      <div className="song-info mb-4 placeholder-glow">
                        <h3 className="h4 text-dark mb-3">
                          <span className="placeholder col-8"></span>
                        </h3>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <span className="badge bg-info text-dark placeholder col-3"></span>
                          <span className="badge bg-info text-dark placeholder col-3"></span>
                          <span className="badge bg-info text-dark placeholder col-2"></span>
                        </div>
                      </div>
                      <div className="placeholder-glow mb-3">
                        <div className="placeholder" style={{ height: '50px', width: '100%' }}></div>
                      </div>
                      <a href="#" tabIndex="-1" className="btn btn-dark w-100 disabled placeholder col-6"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : musics.map((m, index) => (
            <Music
              key={index}
              audioUrl={m.URL}
              album={m.Album}
              artist={m.Artist}
              genre={m.Genre}
              songName={m.Name}
            />
          ))}
    </>
  );
};

export default Musics;
