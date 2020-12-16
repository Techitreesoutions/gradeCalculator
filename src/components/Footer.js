import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer spad">
        <div>Footer</div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              &copy; 2020 Grade Calculator
              <a
                href="http://www.techitree.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Techitree Technologies Pvt. Ltd.
              </a>{" "}
              - All rights reserved. v1.0
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
