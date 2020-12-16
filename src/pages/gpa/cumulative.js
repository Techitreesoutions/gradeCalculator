import React, { Component } from "react";
import HOCSemester from "../../components/HOCSemester";

export default class Cumulative extends Component {
  render() {
    return (
      <div>
        Cumulative GPA calculator
        <HOCSemester />
      </div>
    );
  }
}
