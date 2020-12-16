import React, { Component } from "react";
import HOCSemester from "../../components/gpa/HOCSemester";

export default class HighSchool extends Component {
  render() {
    return (
      <div>
        HighSchool GPA calculator
        <HOCSemester />
      </div>
    );
  }
}
