
—— Mixtape Project, for Context API ——

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);


// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {MixtapeProvider} from "./MixtapeContext";
import {SongList} from "./SongList";
import {Controls} from "./Controls";

const songs = [
  {
    artist: "Smash Mouth",
    genre: "pop",
    name: "All Star",
    year: 1999
  },
  {
    artist: "Drake",
    genre: "rap",
    name: "Hotline Bling",
    year: 2015
  },
  {
    artist: "Lizzo",
    genre: "hip hop",
    name: "Juice",
    year: 2019
  },
  {
    artist: "Rick Astley",
    genre: "rock",
    name: "Never Gonna Give You Up",
    year: 1987
  },
  {
    artist: "4 Non Blondes",
    genre: "rock",
    name: "What's Up",
    year: 1993
  }
];

function App() {
    return (
      <MixtapeProvider songs={songs}>
        <div className="app">
          <h1 className="heading">My 🔥 Mixtape</h1>
          <Controls />
          <SongList />
        </div>
      </MixtapeProvider>
  );
}

export default App


// SongList.js
import React, {useContext} from "react";
import {MixtapeContext} from "./MixtapeContext";
import {Song} from "./Song";

export const SongList = () => {
  const {genre,sortOrder,songs} = useContext(MixtapeContext);
  const filteredSongs = (genre==="all") ? songs : songs.filter((song) => song.genre === genre);
  if ( sortOrder === "ascending") {
    filteredSongs.sort((a, b) => a.year - b.year);
  } else {
    filteredSongs.sort((a, b) => b.year - a.year);
  }
  return (
    <>
      <h2>Genre: {genre}</h2>
      <h2>Sort 2: {sortOrder}</h2>
      {filteredSongs.map((song) => <Song {...song} key={song.name} />
      )}
    </>
  );
};
//<Song artist="james" genre="rock" name="lets boggie" year="2022" />


// Song.js
import React from "react";

export const Song = ({ artist, genre, name, year }) => {
  return (
    <li className="song">
      <div className="contents">
        <h2 className="name">{name}</h2>
        <div className="details left">
          <h3 className="artist">{artist}</h3>
        </div>
        <aside className="details right">
          <p className="genre">{genre}</p>
          <p className="year">{year}</p>
        </aside>
      </div>
    </li>
  );
};



// MixtapeContext.js
import React, {useState} from "react";

export const MixtapeContext = React.createContext();

export const MixtapeProvider = ({children,songs}) => {
  
  const [genre,setGenre] = useState("all");
  const [sortOrder,setSortOrder] = useState("ascending");

  return (
    <MixtapeContext.Provider value={{songs,genre,setGenre,sortOrder,setSortOrder}}>
      {children}
    </MixtapeContext.Provider>
  )

};



// Control.js
import React, {useContext} from "react";
import {MixtapeContext} from "./MixtapeContext";

export const Controls = () => {
  const {genre,sortOrder,setGenre,setSortOrder} = useContext(MixtapeContext);
  return (
    <div className="controls">
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="hip hop">Hip Hop</option>
        <option value="rap">Rap</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
      </select>
      <br/>
      Genre: {genre}
      <button onClick={(e) => setSortOrder(sortOrder==="ascending" ? "descending" : "ascending")}>Toggle Sorting</button> 
    </div>
  );
};



// style.css
* {
  box-sizing: border-box;
}

.app {
  margin: auto;
  max-width: 500px;
}

.heading {
  text-align: center;
}

.song {
  background: black;
  border-radius: 10px;
  color: white;
  font-family: cursive;
  height: 300px;
  margin: 5px;
  padding: 35px 20px;
  position: relative;
}

.song::after,
.song::before {
  background: gray;
  border-radius: 100%;
  content: "";
  display: block;
  font-size: 70px;
  height: 70px;
  line-height: 70px;
  outline: 5px solid black;
  position: absolute;
  text-align: center;
  top: calc(50% - 35px);
  width: 70px;
  box-shadow: 0 0 5px 10px lightgray;
  z-index: 2;
}

.song::after {
  left: 25%;
}

.song::before {
  right: 25%;
}

.contents {
  background: white;
  color: black;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.contents::after,
.contents::before {
  content: "☰";
  position: absolute;
  color: lightgray;
  right: calc(50% - 25px);
  font-size: 50px;
  opacity: 0.5;
  transform: scaleX(1500%);
}

.contents::after {
  bottom: 0;
}

.contents::before {
  top: 0;
}

.details,
.name {
  position: relative;
}

.name {
  align-items: center;
  border-radius: 10px;
  display: flex;
  font-size: 35px;
  font-weight: bold;
  height: 30%;
  justify-content: center;
  line-height: 35px;
  margin: 0 10%;
  text-align: center;
  text-shadow: 0 0 3px white, 0 0 5px white, 0 0 10px white;
}

.details {
  bottom: 0;
  padding: 5px 10px;
  position: absolute;
  text-shadow: 0 0 2px white, 0 0 4px white;
}

.artist {
  font-weight: bold;
  text-align: left;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.genre {
  text-transform: capitalize;
}

.genre::after {
  content: ",";
  margin-right: 0.5em;
}

.artist,
.genre,
.year {
  display: inline-block;
  position: relative;
  z-index: 1;
  font-size: 20px;
}

.controls {
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: stretch;
  margin: 10px 5px;
  padding: 10px;
}

.controls :button,
.controls select {
  background: black;
  border: 3px solid gray;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 10px;
  width: 100%;
}
