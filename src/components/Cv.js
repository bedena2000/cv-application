import React, { Component } from 'react';
import './Cv.css';

import PersonalDetailsCv from './PersonalDetailsCv';
import WorkExperienceCv from './WorkExperienceCv';
import EducationCv from './EducationCv';

class Cv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cv">
        <div className="container cv-container">
          <PersonalDetailsCv cvData={this.props.cvData}/>
          <WorkExperienceCv cvData={this.props.cvData}/>
          <EducationCv cvData={this.props.cvData}/>
        </div>
      </div>
    )
  }
}

export default Cv;