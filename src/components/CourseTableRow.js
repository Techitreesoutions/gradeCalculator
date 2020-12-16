import React, { Component } from "react";
export default class CourseTableRow extends Component {
  render() {
    return (
      <div className="box">
        <div className="row">
          <div className="col-lg-4">Course Name</div>
          <div className="col-lg-2">Grade dropdown</div>
          <div className="col-lg-2">Credits</div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">Weight</div>
          <div className="col-lg-1">x</div>
        </div>
      </div>
    );
  }
}
