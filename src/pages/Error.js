import React, { Component } from "react";

export default class Error extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section className="blog-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-7 order-md-1 order-1">
                <div className="blog__details__text">
                  <h1>Oops!</h1>
                  <h2>404 - The Page can't be found</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
