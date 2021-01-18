import React from "react";
import { Offline, Online } from "react-detect-offline";
import "./assets/stylesheets/style.css";

import NoInternet from "./pages/noInternet";
import MyHome from "./pages/myHome";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <div>
          <Online>
            <MyHome />
          </Online>
          <Offline>
            <NoInternet />
          </Offline>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
