import React, { Component } from 'react';

class PersonalDetailsCv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="personal-details-cv">
        <h1 className="cv-name">{this.props.cvData.name}</h1>
        <p className="cv-title">{this.props.cvData.title}</p>
        <div className="cv-phone">{this.props.cvData.phone}</div>
        <p className="cv-email">{this.props.cvData.email}</p>
        <p className="cv-location">{this.props.cvData.location}</p>
        <div className="cv-description">
          {this.props.cvData.description}
        </div>
      </div>
    )
  };
}

export default PersonalDetailsCv;