import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header1 from "../components/Header1";
import MyRouting from "./myRouting";
import Footer from "../components/Footer";
import ReactGA from "react-ga";

export default class MyHome extends Component {
  componentDidMount = () => {
    this.initializeReactGA();
    window.scrollTo(0, 0);
  };
  initializeReactGA = () => {
    ReactGA.initialize("UA-175057368-1");
    ReactGA.pageview("/");
  };

  render() {
    return (
      <div>
        <Header1 />
        <BrowserRouter>
          <MyRouting />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
