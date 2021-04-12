import React, { Component } from "react";
import { connect } from 'react-redux';
import { api } from "../../services/Api";
import { Auth } from '../../actions/index';
import { Form } from "semantic-ui-react";

class SignUpPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmail = data => this.setState({email: data})
    handlePassword = data => this.setState({password: data})

    handleSubmit = (e) => {
        e.preventDefault()
   
        const newUser = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(newUser)
        // api.auth.signup(newUser).then(data => {
        //     localStorage.setItem('token', data.jwt )
        //     this.props.Auth(data)
        //     console.log(data)
        // })
    }


  render() {
    return (
      <div className="signup">
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-email"
              label="email"
              placeholder="email"
              onChange={e => this.handleEmail(e.target.value)}
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-password"
              label="password"
              placeholder="password"
              onChange={e => this.handlePassword(e.target.value)}
            />
               <button href="/" type="submit" className="ui basic black button">
                signup
              </button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
}

export default connect(mapStateToProps)(SignUpPage);
