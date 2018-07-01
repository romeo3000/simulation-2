import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import House from '../House/House'
import './Dashboard.css'
import axios from 'axios'

export default class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      properties: []
        
    }

    this.propertyUpdate = this.propertyUpdate.bind(this)
  }



  componentDidMount(){
    axios.get('/api/').then( res =>{
      console.log(res)
      this.setState({properties: res.data})
    } )
  }

  propertyUpdate(res){
    this.setState({properties: res.data})
  }
  

  render(){
    let propertiesDisplay = this.state.properties.map( (property, i) => {
      return (
      <House
        propertyUpdate={this.propertyUpdate}
        key={property.propertyid}
        propertyid={property.propertyid}
        propertyname={property.propertyname}
        address={property.address} 
        city={property.city} 
        state={property.state} 
        zip={property.zip}
        imageUrl={property.image}
        mortgage={property.mortgageamt}
        desiredRent={property.desiredrent} 
      />
      )}
    )


    return(
      <div className='dashboard-container'>
        <div className='dashboard-page'>
          <h1>Dashboard</h1>
          <Link to='/wizard'>
            <div 
              className='dashboard-add-property-btn'
              >
              Add New Property
            </div>
          </Link>
        
        {propertiesDisplay}

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

 connect(mapStateToProps)(Dashboard);