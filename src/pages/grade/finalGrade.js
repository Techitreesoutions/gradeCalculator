import React, { Component } from "react";
import PercentLetter from "../../components/grade/PercentLetter";
import WeightPercent from "../../components/grade/WeightPercent";

export default class FinalGrade extends Component {
  render() {
    return (
      <div className="box">
        <p>Final grade calculator Your Current Grade </p>
        <div className="row">
          <div className="col-lg-4">Your current class grade</div>
          <PercentLetter />
        </div>
        <div className="row">
          <div className="col-lg-4">Your desired class grade</div>
          <PercentLetter />
        </div>
        <div className="row">
          <div className="col-lg-4">Your final exam weight</div>
          <WeightPercent />
        </div>
        <div>
          <button>Calculate</button>
          <button>Reset</button>
        </div>
        <div className="box">
          Calculated value will come here as grade needed
        </div>
      </div>
    );
  }
}
