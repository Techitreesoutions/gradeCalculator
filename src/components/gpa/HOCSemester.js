import React, { Component } from "react";
import Semester from "./Semester";
export default class HOCSemester extends Component {
  render() {
    return (
      <div className="box">
        <Semester />
        <div>
          <button>Add semester</button>
        </div>
        <span>calculated GPA value will be displayed here</span>
      </div>
    );
  }
}
