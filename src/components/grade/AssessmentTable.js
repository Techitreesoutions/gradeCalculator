import React, { Component } from "react";
import AssessmentTableRow from "./AssessmentTableRow";
export default class AssessmentTable extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <AssessmentTableRow />
          <AssessmentTableRow />
          <AssessmentTableRow />
          <AssessmentTableRow />
          <AssessmentTableRow />
        </div>
        <div>
          <button>Add the assessment</button>
        </div>
      </div>
    );
  }
}
