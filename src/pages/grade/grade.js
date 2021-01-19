import React, { Component } from "react";
import HOCClass from "../../components/grade/HOCClass";
import PageHeader from "../../components/PageHeader";

export default class Grade extends Component {
  render() {
    return (
      <div>
        <PageHeader
          pageName={"Grade calculator"}
          pageDescription={"This is page description"}
        />
        <HOCClass />
      </div>
    );
  }
}
