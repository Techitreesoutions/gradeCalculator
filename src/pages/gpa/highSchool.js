import React, { Component } from "react";
import HOCSemester from "../../components/gpa/HOCSemester";
import PageHeader from "../../components/PageHeader";

export default class HighSchool extends Component {
  render() {
    return (
      <div>
        <PageHeader
          pageName={"High School GPA calculator"}
          pageDescription={"This is page description"}
        />
        <HOCSemester />
      </div>
    );
  }
}
