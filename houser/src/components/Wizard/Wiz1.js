import React from 'react'
import './Wizard.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateName, updateAddress, updateCity, updateStateName, updateZip} from '../../ducks/reducer'

class Wiz1 extends React.Component {
  
  submitProperty(){
    let { name, address, city, stateName, zip } = this.state 
    axios.post('/api', { propertyname: name, address, city, state: stateName, zip })
    .then( this.setState({ redirect:true }) )
  }

  render(){
    console.log(this.props)
    return(
      <div>
       <div className='wizard-form-container'>

          <div className='wizard-form-input-container'>
            <h1> Name </h1>
            <input value={this.props.name} onChange={ (e)=>this.props.updateName(e.target.value) }  />
          </div>

          <div className='wizard-form-input-container'>
            <h1> Address </h1>
            <input value={this.props.address} onChange={ (e)=>this.props.updateAddress(e.target.value) }  />
          </div>

          <div className='wizard-form-input-container'>
            <h1> City </h1>
            <input value={this.props.city} onChange={ (e)=>this.props.updateCity(e.target.value) }  />
          </div>

          <div className='wizard-form-input-container'>
            <h1> State </h1>
            <input value={this.props.stateName} onChange={ (e)=>this.props.updateStateName(e.target.value) }  />
          </div>

          <div className='wizard-form-input-container'>
            <h1> Zip </h1>
            <input value={this.props.zip} onChange={ (e)=>this.props.updateZip(e.target.value) }  />
          </div>
        </div>
        <div className='next-last-btn-container'>
          <Link to='/wizard/pg2'> <div className='next-btn'> Next </div> </Link>
        </div>
      </div>
      
    )
  }
}

function mapStateToProps(state){
  const {name, address, city, stateName, zip} = state
  return {
    name,
    address,
    city,
    stateName,
    zip,
  }
}

let actionCreators = {
  updateName, updateAddress, updateCity, updateStateName, updateZip
}

export default connect(mapStateToProps, actionCreators)(Wiz1)  