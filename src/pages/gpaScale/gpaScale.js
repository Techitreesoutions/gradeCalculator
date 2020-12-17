import React, { Component } from "react";
import { GPARange } from "../../util/constants";

export default class GPAScale extends Component {
  state = {
    calculatedGPA: 0,
  };
  onLetterChange = (event) => {
    GPARange.forEach((item) => {
      if (item.Letter === event.target.value) {
        this.setState({
          selectedLetter: event.target.value,
          selectedPercent: item.MinPercent,
          calculatedGPA: item.GPAScale,
        });
      }
    });
  };
  onPercentChange = (event) => {
    GPARange.forEach((item) => {
      if (item.MinPercent === parseInt(event.target.value)) {
        this.setState({
          selectedLetter: item.Letter,
          selectedPercent: event.target.value,
          calculatedGPA: item.GPAScale,
        });
      }
    });
  };
  render() {
    return (
      <div>
        GPAScale
        <table>
          <tr>
            <td>
              <select
                onChange={this.onLetterChange}
                value={this.state.selectedLetter}
              >
                <option value="0">Select the letter</option>
                {GPARange &&
                  GPARange.map((data, index) => {
                    return <option value={data.Letter}>{data.Letter}</option>;
                  })}
              </select>
            </td>
            <td>
              <select
                onChange={this.onPercentChange}
                value={this.state.selectedPercent}
              >
                <option value="0">Select the GPA</option>
                {GPARange &&
                  GPARange.map((data, index) => {
                    return (
                      <option value={data.MinPercent}>
                        {data.MinPercent}-{data.MaxPercent}
                      </option>
                    );
                  })}
              </select>
            </td>
            <td>
              <strong> {this.state.calculatedGPA}</strong>
            </td>
          </tr>
        </table>
        <table>
          <th>List of Common GPA Conversations</th>
          {GPARange &&
            GPARange.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.Letter}</td>
                  <td>
                    {data.MinPercent} - {data.MaxPercent}
                  </td>
                  <td>{data.GPAScale}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
