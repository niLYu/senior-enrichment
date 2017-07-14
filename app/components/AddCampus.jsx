import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createCampus} from '../reducers/campuses'


class AddCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        image: ''
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
    console.log('state', this.state);
    this.props.createCampus(this.state);
    this.setState(this.state);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Campus Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Image Url:
             <input
              name="image"
              type="text"
              value={this.state.image}
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


const mapDispatchToProps = {createCampus};

export default connect(null, mapDispatchToProps)(AddCampus);
