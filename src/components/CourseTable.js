import React, { Component } from "react";
import CourseTableRow from "./CourseTableRow";
export default class CourseTable extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <CourseTableRow />
          <CourseTableRow />
          <CourseTableRow />
          <CourseTableRow />
          <CourseTableRow />
        </div>
        <div>
          <button>Add the course</button>
        </div>
      </div>
    );
  }
}
