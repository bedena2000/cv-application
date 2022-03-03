import React, { Component } from 'react';

class EducationCv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="education-cv">
        <h3 className="ed-title">Education</h3>
        <p className="ed-course">{this.props.cvData.course}</p>
        <p className="ed-university">{this.props.cvData.university}</p>
        <p className="ed-start">{this.props.cvData.eduStartDate}</p>
        <p className="ed-end">{this.props.cvData.eduEndDate}</p>
        <p className="ed-description">{this.props.cvData.eduDescription}</p>
      </div>
    )
  }
}

export default EducationCv;