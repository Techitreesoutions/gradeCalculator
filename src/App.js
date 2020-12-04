import React from "react";
import { Offline, Online } from "react-detect-offline";

import "./App.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/nice-select.css";
// import "./assets/css/jquery-ui.min.css";
// import "./assets/css/owl.carousel.min.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";

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
