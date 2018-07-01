import React from 'react'
import './Wizard.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateImageUrl} from '../../ducks/reducer'

class Wiz2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageUrl: ''
    }
  }

  updateImage(input){
    this.setState( {imageUrl : input } )
  }


  render(){
    console.log(this.props)
    return(
       <div className='wizard-form-container'>

        <div className='wizard-form-input-container'>
          <h1> Image URL </h1>
          <input value={this.props.imageUrl} onChange={ (e)=>this.props.updateImageUrl(e.target.value) }  />
        </div>
        <div className='next-last-btn-container'>
          <Link to='/wizard/pg3'> <div className='next-btn'> Next </div> </Link>
          <Link to='/wizard/'> <div className='last-btn'> Last </div> </Link>
        </div>
      </div>
      
    )
  }
}


function mapStateToProps(state){
  return {
    imageUrl: state.imageUrl,

  }
}



export default connect(mapStateToProps, {updateImageUrl})(Wiz2)