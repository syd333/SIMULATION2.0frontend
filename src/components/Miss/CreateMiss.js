import React, { Component } from "react";
import { api } from "../../services/Api";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

class CreateMiss extends Component {
  state = {
    title: "",
    message: "",
  };

  handleTitle = (data) => this.setState({ title: data });
  handleMessage = (data) => this.setState({ message: data });

  handleSubmit = (e) => {};

  render() {
    return (
      <div className="createmiss ui grid">
        <div className="eight wide rows">
          <Form className="cmiss" onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="title"
                onChange={(e) => this.handleTitle(e.target.value)}
              />
                </Form.Group>
              {/* <Form.Input fluid label="Last name" placeholder="Last name" /> */}
              <Form.TextArea
                label="subject"
                onChange={(e) => this.handleMessage(e.target.value)}
              />
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              <button href="/" type="submit" className="createmissbutton">
                submit
              </button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreateMiss;
