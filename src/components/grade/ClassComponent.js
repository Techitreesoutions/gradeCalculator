import React, { Component } from "react";
import AssessmentTable from "./AssessmentTable";
export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3">
            <h3>Class</h3>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          {/* x button to close or cut the semester Component */}
          <div className="col-lg-3">
            <div className="float-right">x</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <AssessmentTable />
          </div>
        </div>
      </div>
    );
  }
}
