import React, { Component } from "react";
import { api } from "../../services/Api";
import { connect } from "react-redux";
import {addMiss} from '../../actions/index';
import { Form } from "semantic-ui-react";

class CreateMiss extends Component {
  state = {
    title: "",
    message: "",
  };

  handleTitle = (data) => this.setState({ title: data });
  handleMessage = (data) => this.setState({ message: data });

  handleSubmit = (e) => {
    e.preventDefault()
    const newMiss = {
        title: this.state.title,
        message: this.state.message,
        user_id: this.props.user.id,
    }
    api.miss.addMiss(newMiss).then((data) => {
      //how to get user id + miss id into params
        this.props.addMiss(data)
    })
    this.props.history.push('/')
};

  render() {
    return (
      <div className="createmiss ui grid">
        <div className="eight wide rows">
          <Form className="cmiss" onSubmit={e => this.handleSubmit(e)}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="title"
                onChange={(e) => this.handleTitle(e.target.value)}
              />
                </Form.Group>
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
//user: state.auth.user
const mapStateToProps = state => {
   return {user: state.auth.user}
}
export default connect(mapStateToProps, {addMiss})(CreateMiss);
