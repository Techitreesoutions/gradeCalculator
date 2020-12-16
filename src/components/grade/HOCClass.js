import React, { Component } from "react";
import ClassComponent from "./ClassComponent";
export default class HOCClass extends Component {
  render() {
    return (
      <div className="box">
        <ClassComponent />
        <div>
          <button>Add class</button>
        </div>
        <span>Class name</span>
        <span>Grade value</span>
      </div>
    );
  }
}
