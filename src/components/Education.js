import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '',
      university: '',
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
      <div className="education">
        <h3 className="section-title">Education</h3>
        <input type="text" className="input-item course" placeholder="course/program" onChange={(event) => {
          this.handleChange(event, 'course');
          this.props.dataChange('course', this.state.course);
        }}/>
        <input type="text" className="input-item university" placeholder="university" onChange={(event) => {
          this.handleChange(event, 'university');
          this.props.dataChange('university', this.state.university);
        }}/>
        <input type="text" className="input-item start-date-education" placeholder="start date" onChange={(event) => {
          this.handleChange(event, 'startDate');
          this.props.dataChange('eduStartDate', this.state.startDate);
        }}/>
        <input type="text" className="input-item end-date-education" placeholder="end date" onChange={(event) => {
          this.handleChange(event, 'endDate');
          this.props.dataChange('eduEndDate', this.state.endDate);
        }}/>
        <input type="text" className="input-item description-education" placeholder="Description" onChange={(event) => {
          this.handleChange(event, 'description');
          this.props.dataChange('eduDescription', this.state.description);
        }}/>
      </div>
    )
  }
}

export default Education;