import React, {Component} from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearInputs } from '../../ducks/reducer'
import './Wizard.css'
import Wiz1 from './Wiz1'
import Wiz2 from './Wiz2'

class Wizard extends Component{

  render(){

    return(
      <div className='wizard-container'>
      <div className='wizard-page'>
        <h1>Wizard</h1>
        <Link to='/'>
          <div 
            className='wizard-cancel-btn'
            onClick={()=>this.props.clearInputs()}
            >
            Cancel
          </div>
        </Link>
        <Switch>
          <Route component={Wiz1} exact path='/wizard'/>
          <Route component={Wiz2} path='/wizard/pg2'/>
        </Switch>
      </div>


    </div>
    )
  }
}

function mapStateToProps(state){
    let { name, address, city, stateName, zip, imageUrl, mortgage, desiredRent } = state
  return {
    name,
    address,
    city,
    stateName,
    zip,
    imageUrl,
    mortgage,
    desiredRent
  }
}

export default connect(mapStateToProps, {clearInputs})(Wizard) 