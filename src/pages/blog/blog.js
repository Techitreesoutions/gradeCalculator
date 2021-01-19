import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <PageHeader
          pageName={"Blog"}
          pageDescription={"This is page description"}
        />
      </div>
    );
  }
}
