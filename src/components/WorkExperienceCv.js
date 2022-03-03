import React, { Component } from 'react';

class WorkExperienceCv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="work-experience-cv">
        <h3 className="work-title">Work Experience</h3>
        <p className="work-ex-company">{this.props.cvData.company}</p>
        <p className="work-ex-position">{this.props.cvData.position}</p>
        <p className="work-ex-start">{this.props.cvData.startDate}</p>
        <p className="work-ex-end">{this.props.cvData.endDate}</p>
        <div className="work-ex-description">{this.props.cvData.workDescription}</div>
      </div>
    )
  }
}

export default WorkExperienceCv;