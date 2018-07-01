import React, { Component } from 'react';
import './App.css';
//import { connect } from 'react-redux';
import Header from './components/Header/Header';
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        {routes}
       
      </div>
    );
  }
  }
  //function mapStateToProps(state) {
//   return {
//     properties: state.properties
//   }
// }

//  connect(mapStateToProps)(App);


