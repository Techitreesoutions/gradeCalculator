import React, { Component } from "react";
import HOCSemester from "../../components/HOCSemester";

export default class College extends Component {
  render() {
    return (
      <div>
        College GPA calculator
        <HOCSemester />
      </div>
    );
  }
}
