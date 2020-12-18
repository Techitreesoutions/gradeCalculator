import React, { Component } from "react";
import Semester from "./Semester";
import { defaultSemesterCount } from "../../util/constants";
export default class HOCSemester extends Component {
  state = {
    semesterCount: defaultSemesterCount,
    semesterBlocks: [],
  };

  componentDidMount = () => {
    this.init();
  };

  increaseSemesterBlock = () => {
    var lastElement = this.state.semesterBlocks[
      this.state.semesterBlocks.length - 1
    ];
    var newElement = (
      <Semester
        semIndex={parseInt(lastElement.key) + 1}
        decreaseSemesterBlock={this.decreaseSemesterBlock}
        key={parseInt(lastElement.key) + 1}
      />
    );

    this.setState((prevState) => ({
      semesterBlocks: [...prevState.semesterBlocks, newElement],
    }));
  };

  decreaseSemesterBlock = (key) => {
    var array = [...this.state.semesterBlocks];
    var index;
    array.forEach((item, i) => {
      if (parseInt(item.key) === key) {
        index = i;
      }
    });
    array.splice(index, 1);
    this.setState({
      semesterBlocks: array,
    });
  };

  init = () => {
    var requiredArray = [];
    for (var i = 0; i < this.state.semesterCount; i++) {
      requiredArray.push(
        <Semester
          semIndex={i}
          decreaseSemesterBlock={this.decreaseSemesterBlock}
          key={i}
        />
      );
    }

    this.setState({
      semesterBlocks: requiredArray,
    });
  };

  render() {
    return (
      <div className="box">
        {this.state.semesterBlocks}
        <div>
          <button onClick={this.increaseSemesterBlock}>Add semester</button>
        </div>
        <span>calculated GPA value will be displayed here</span>
      </div>
    );
  }
}
