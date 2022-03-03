import React, { Component } from 'react';
import './PersonalDetails.css';

import WorkExperience from './WorkExperience';
import Education from './Education';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      phone: '',
      email: '',
      location: '',
      description: '',
    }
  }
  handleChange(event, type) {
    this.setState({
      [type]: event.target.value
    })
  }
  render() {
    return (
      <div className="personal-wrapper">
        <div className="container personal-wrapper-container">
          <h2 className="personal-title">Personal Details</h2>
          <input type="text" className="name input-item" value={this.state.name} placeholder="name" onChange={(event) => {
            this.handleChange(event, 'name');
            this.props.dataChange('name', this.state.name);
          }}/>
          <input type="text" className="title input-item" value={this.state.title} placeholder="title" onChange={(event) => {
            this.handleChange(event, 'title');
            this.props.dataChange('title', this.state.title);
          }}/>
          <input type="text" className="phone input-item" value={this.state.phone} placeholder="phone" onChange={(event) => {
            this.handleChange(event, 'phone');
            this.props.dataChange('phone', this.state.phone);
          }}/>
          <input type="text" className="email input-item" value={this.state.email} placeholder="email" onChange={(event) => {
            this.handleChange(event, 'email');
            this.props.dataChange('email', this.state.email);
          }}/>
          <input type="text" className="location input-item" value={this.state.location} placeholder="Location" onChange={(event) => {
            this.handleChange(event, 'location');
            this.props.dataChange('location', this.state.location);
          }}/>
          <textarea className="description-input" value={this.state.description} placeholder="description" onChange={(event) => {
            this.handleChange(event, 'description');
            console.log(this.state.description);
            this.props.dataChange('description', this.state.description);
          }}></textarea>
          <WorkExperience dataChange={this.props.dataChange}/>
          <Education dataChange={this.props.dataChange}/>
        </div>
      </div>
    )
  }
};

export default PersonalDetails;