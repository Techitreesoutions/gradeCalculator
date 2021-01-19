import React, { Component } from "react";
import HOCClass from "../../components/grade/HOCClass";
import PageHeader from "../../components/PageHeader";

export default class WeightedGrade extends Component {
  render() {
    return (
      <div>
        Weighted calculator
        <PageHeader
          pageName={"Weighted calculator"}
          pageDescription={"This is page description"}
        />
        <HOCClass />
      </div>
    );
  }
}
