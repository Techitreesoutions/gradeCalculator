import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader
          pageName={"Home"}
          pageDescription={"This is page description"}
        />
        <PageFooter />
      </div>
    );
  }
}
