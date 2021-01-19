import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <PageHeader
          pageName={"FAQ"}
          pageDescription={"This is page description"}
        />
      </div>
    );
  }
}
