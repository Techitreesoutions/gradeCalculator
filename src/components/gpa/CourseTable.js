import React, { Component } from "react";
import { defaultCourseCountInSemester } from "../../util/constants";
import CourseTableRow from "./CourseTableRow";
export default class CourseTable extends Component {
  state = {
    courseRowCount: defaultCourseCountInSemester,
    rows: [],
  };

  componentDidMount = () => {
    this.init();
  };

  increaseCourseRowCount = () => {
    var array = this.state.rows;
    var lastElement = array[array.length - 1];

    array.push(
      <CourseTableRow
        index={parseInt(lastElement.key) + 1}
        decreaseCourseRow={this.decreaseCourseRowCount}
        key={parseInt(lastElement.key) + 1}
      />
    );
    this.setState({
      rows: array,
    });
  };

  decreaseCourseRowCount = (key) => {
    var array = this.state.rows;
    var index;
    array.forEach((item, i) => {
      if (parseInt(item.key) === key) {
        index = i;
      }
    });
    array.splice(index, 1);
    this.setState({
      rows: array,
    });
  };

  init = () => {
    var requiredArray = [];
    for (var i = 0; i < this.state.courseRowCount; i++) {
      requiredArray.push(
        <CourseTableRow
          index={i}
          decreaseCourseRow={this.decreaseCourseRowCount}
          key={i}
        />
      );
    }

    this.setState({
      rows: requiredArray,
    });
  };
  render() {
    return (
      <div className="box">
        <div>{this.state.rows}</div>
        <div>
          <button onClick={this.increaseCourseRowCount}>Add the course</button>
        </div>
      </div>
    );
  }
}
