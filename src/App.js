import React, { Component } from 'react';
import './App.css';

import PersonalDetails from './components/PersonalDetails.js';
import Cv from './components/Cv.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      phone: '',
      email: '',
      location: '',
      description: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      workDescription: '',
      course: '',
      university: '',
      eduStartDate: '',
      eduEndDate: '',
      eduDescription: '',
    }
    this.dataChange = this.dataChange.bind(this);
  }; 
  dataChange(dataType, text) {
    this.setState({
      [dataType]: text,
    })
  }
  render() {
    return (
      <div className="app">
        <PersonalDetails dataChange={this.dataChange}/>
        <Cv cvData={this.state}/>
      </div>
    )
  }
};

export default App;
