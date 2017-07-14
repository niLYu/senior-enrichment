import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStudent} from '../reducers/students';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)
    console.log('state', this.state);
    this.props.createStudent(this.state);
    this.setState(this.state);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Email address:
             <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange} />
          </label>
          <button
            type="submit">
            Submit
         </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {createStudent};

export default connect(null, mapDispatchToProps)(AddStudent);
