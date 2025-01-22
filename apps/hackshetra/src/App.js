import React, { useState } from "react";

import { Timeline, Bookmark } from "./vertical-progress-timeline";
import "./vertical-progress-timeline/style.css";

import "./App.css";

export default function App() {
  const [stateClick, setStateClick] = useState(0);
  return (
    <div className="App" onClick={() => setStateClick(stateClick + 1)}>
      {/* {stateClick} */}
      <div className="container">
        <Timeline className="my-vertical-progress">
          <Bookmark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Bookmark>
          <Bookmark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Bookmark>
          <Bookmark>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Bookmark>
          <Bookmark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Bookmark>
          <Bookmark>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Bookmark>
          <Bookmark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Bookmark>
          <Bookmark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Bookmark>
        </Timeline>
      </div>
    </div>
  );
}
