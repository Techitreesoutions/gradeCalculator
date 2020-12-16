import React, { Component } from "react";
export default class AssessmentTableRow extends Component {
  render() {
    return (
      <div className="box">
        <div className="row">
          <div className="col-lg-4">Assessment Name</div>
          <div className="col-lg-2">Letter dropdown</div>
          <div className="col-lg-3">Percent dropdown</div>
          <div className="col-lg-2">Weight%</div>
          <div className="col-lg-1">x</div>
        </div>
      </div>
    );
  }
}
