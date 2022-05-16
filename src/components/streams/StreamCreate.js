import React, { Component } from "react";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
import { createStream } from "./../../actions/index";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3 className="header">Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
