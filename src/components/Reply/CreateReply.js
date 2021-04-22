import React, { Component } from "react";
import { connect } from "react-redux";
import { addReply} from '../../actions/index';
import { api } from "../../services/Api";
import { Form } from "semantic-ui-react";


class CreateReply extends Component {
  state = {
    title: "",
    message: "",
  };


  handleTitle = (data) => this.setState({ title: data });
  handleMessage = (data) => this.setState({ message: data });

  handleSubmit = (e) => {
    e.preventDefault()
    const newReply = {
        title: this.state.title,
        message: this.state.message,
        user_id: this.props.location.state.selectedMis.user.id,
        miss_id: this.props.location.state.selectedMis.id,
    }
    api.reply.addReply(newReply).then((data) => {
        this.props.addReply(data)
    })
    window.history.back()
};

  render() {
    return (
      <div className="createreply">
        <div>
          <p>MISSED CONNECT</p>
          <Form className="creply" onSubmit={(e) => this.handleSubmit(e)}>
            <br></br>
            <label className="titlelabel"> TITLE</label>
            <br></br>
            <Form.Input onChange={(e) => this.handleTitle(e.target.value)} />
            <label className="subjectlabel"> SUBJECT</label>
            <Form.TextArea
              onChange={(e) => this.handleMessage(e.target.value)}
            />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <button href="/" type="submit" className="createreplybutton">
              REPLY
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {}
}


export default connect(mapStateToProps, {addReply})(CreateReply);
