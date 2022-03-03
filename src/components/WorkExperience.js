import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
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
      <div className="work-experience">
        <h3 className="section-title">Work Experience</h3>
        <input type="text" className="company input-item" value={this.state.company} placeholder="company" onChange={(event) => {
          this.handleChange(event, 'company');
          this.props.dataChange('company', this.state.company);
        }}/>
        <input type="text" className="position input-item" value={this.state.position} placeholder="position" onChange={(event) => {
          this.handleChange(event, 'position');
          this.props.dataChange('position', this.state.position);
        }}/>
        <input type="text" className="start-date input-item" value={this.state.startDate} placeholder="start date" onChange={(event) => {
          this.handleChange(event, 'startDate');
          this.props.dataChange('startDate', this.state.startDate);
        }}/>
        <input type="text" className="end-date input-item" value={this.state.endDate} placeholder="end date" onChange={(event) => {
          this.handleChange(event, 'endDate');
          this.props.dataChange('endDate', this.state.endDate);
        }}/>
        <input type="text" className="description-work input-item" value={this.state.description} placeholder="description" onChange={(event) => {
          this.handleChange(event, 'description');
          this.props.dataChange('workDescription', this.state.description);
        }}/>
      </div>
    )
  }
};

export default WorkExperience;