import React, { Component } from "react";
import CourseTable from "./CourseTable";
export default class Semester extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3">
            <h3>Semester</h3>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="float-right">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Weighted
                </label>
              </div>
            </div>
          </div>
          {/* x button to close or cut the semester Component */}
          <div className="col-lg-3">
            <div className="float-right">x</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CourseTable />
          </div>
        </div>
      </div>
    );
  }
}
