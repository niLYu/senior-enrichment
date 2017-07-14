import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStudent} from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        campusId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampuses();
  }
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let campusAssoc = 0;

    for (let i = 0; i < this.props.campuses.length; i++) {
      if (this.state.campusId == this.props.campuses[i].name) {
        campusAssoc = this.props.campuses[i].id;
      }
    }

    if (campusAssoc) {
      this.props.createStudent({
        name: this.state.name,
        email: this.state.email,
        campusId: campusAssoc});
    } else {
      this.props.createStudent({
        name: this.state.name,
        email: this.state.email
      })
    }

    this.setState(this.state);
  }

  render() {
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
           <label>
            Campus:
             <input
              name="campusId"
              type="text"
              value={this.state.campusId}
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

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = {fetchCampuses, createStudent};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
