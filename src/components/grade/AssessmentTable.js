import React, { Component } from "react";
import { defaultAssessmentCountInClass } from "../../util/constants";
import AssessmentTableRow from "./AssessmentTableRow";

export default class AssessmentTable extends Component {
  render() {
    var rows = [];
    for (var i = 0; i < defaultAssessmentCountInClass; i++) {
      rows.push(<AssessmentTableRow key={i} />);
    }
    return (
      <div className="box">
        <div>{rows}</div>
        <div>
          <button>Add the assessment</button>
        </div>
      </div>
    );
  }
}
