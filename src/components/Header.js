import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo image-margin">
              <a href="/">Logo</a>
            </div>
          </div>
          <div className="col-lg-9">
            <nav className="header__menu">
              <ul>
                <li>
                  <a href="/">GPA Calculators</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="/gpa/collegeGPA"> College GPA Calculator</a>
                    </li>
                    <li>
                      <a href="/gpa/highSchoolGPA">
                        High school GPA Calculator
                      </a>
                    </li>
                    <li>
                      <a href="/gpa/cumulativeGPA">Cumulative GPA Calculator</a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="/grade-calc">Grade Calculators</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="/grade-calc"> Grade Calculator</a>
                    </li>
                    <li>
                      <a href="/grade-calc/final"> Final Grade Calculator</a>
                    </li>
                    <li>
                      <a href="/grade-calc/weighted">
                        Weighted Grade Calculator
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/gpa-scale">GPA scale</a>
                </li>
                <li>
                  <a>Guides</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="/calculate-gpa">How to calculate GPA</a>
                    </li>
                    <li>
                      <a href="/calculate-raise">How to raise your GPA</a>
                    </li>
                    <li>
                      <a href="/calculate-grades"> How to calculate Grades</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
