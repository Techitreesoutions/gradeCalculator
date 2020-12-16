import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";

import Error from "./Error";
import College from "./gpa/college";
import HighSchool from "./gpa/highSchool";
import Cumulative from "./gpa/cumulative";
import Grade from "./grade/grade";
import FinalGrade from "./grade/finalGrade";
import WeightedGrade from "./grade/weightedGrade";
import CalculateGPA from "./guides/calculateGPA";
import CalculateGrade from "./guides/calculateGrade";
import CalculateRaise from "./guides/calculateRaise";
import GPAScale from "./gpaScale/gpaScale";
import Blog from "./blog/blog";

export default class MyRouting extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        {/* gpa calculator */}
        <Route exact path="/gpa/collegeGPA" component={College} />
        <Route exact path="/gpa/highSchoolGPA" component={HighSchool} />
        <Route exact path="/gpa/cumulativeGPA" component={Cumulative} />
        {/* grade calculator */}
        <Route exact path="/grade-calc" component={Grade} />
        <Route exact path="/grade-calc/final" component={FinalGrade} />
        <Route exact path="/grade-calc/weighted" component={WeightedGrade} />
        {/* guides */}
        <Route exact path="/calculate-gpa" component={CalculateGPA} />
        <Route exact path="/calculate-raise" component={CalculateRaise} />
        <Route exact path="/calculate-grades" component={CalculateGrade} />
        {/* others */}
        <Route exact path="/gpa-scale" component={GPAScale} />
        <Route exact path="/blog" component={Blog} />

        <Route component={Error} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}
