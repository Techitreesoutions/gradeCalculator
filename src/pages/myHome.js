import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
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
      <div className="container">
        <Header />
        <BrowserRouter>
          <MyRouting />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
