
import React from 'react'
import './House.css'
import axios from 'axios'

export default function House(props){

  function deleteProperty(id){
    axios.delete(`/api/${id}`)
    axios.get('/api/')
    .then(res => props.propertyUpdate(res))
  }

  let imgStyles = {
    backgroundImage: `url(${props.imageUrl}`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return(
      <div className='property-container'>
        <div className='image-container' style={imgStyles}>
        </div>
        <div className='property-details'>
          <h2>{`Property Name: ${ props.propertyname }`}</h2>
          <h2>{`Address: ${ props.address }`}</h2>
          <h2>{`City: ${ props.city }`}</h2>
          <h2>{`State: ${ props.state }`}</h2>
          <h2>{`Zip: ${ props.zip }`}</h2>
        </div>
        <div className='property-finances'>
          <h2>{`Monthly Mortgage: ${props.mortgage}`}</h2>
          <h2>{`Desired Rent: ${props.desiredRent}`}</h2>
        </div>
        <div 
          className='house-delete'
          onClick={()=>deleteProperty(props.propertyid)}
        >X
        </div> 
      </div>
  )
}

