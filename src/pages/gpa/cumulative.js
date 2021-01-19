import React, { Component } from "react";
import HOCSemester from "../../components/gpa/HOCSemester";
import PageHeader from "../../components/PageHeader";

export default class Cumulative extends Component {
  render() {
    return (
      <div>
        <PageHeader
          pageName={"Cumulative GPA calculator"}
          pageDescription={"This is page description"}
        />
        <HOCSemester />
      </div>
    );
  }
}
