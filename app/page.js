"use client";

import React, { Component } from 'react';
import Musics from '../components/musics';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {} 
    render() { 
        return (
          <html lang="en">
            <head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>HDAI Music</title>
            </head>
          <body>
            <Musics />
          </body>
        </html>
        );
    }
}
 
export default App;
