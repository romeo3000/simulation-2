const initialState = {
    name: '',
    address: '',
    city: '',
    stateName: '',
    zip: '',
    imageUrl: '',
    mortgage: '',
    desiredRent: ''
  }
  
  const UPDATE_NAME = 'UPDATE_NAME'
  const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
  const UPDATE_CITY = 'UPDATE_CITY'
  const UPDATE_STATENAME = 'UPDATE_STATENAME'
  const UPDATE_ZIP = 'UPDATE_ZIP'
  const UPDATE_IMAGEURL = 'UPDATE_IMAGEURL'
  const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
  const UPDATE_DESIREDRENT = 'UPDATE_DESIREDRENT'
  const CLEAR_INPUT = 'CLEAR_INPUT'
  
  export default function reducer(state=initialState, action){
    switch(action.type){
  
      case UPDATE_NAME:
        return Object.assign({}, state, {name: action.payload})
  
      case UPDATE_ADDRESS:
        return Object.assign({}, state, {address: action.payload})
  
      case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload})
  
      case UPDATE_STATENAME:
        return Object.assign({}, state, {stateName: action.payload})
  
      case UPDATE_ZIP:
        return Object.assign({}, state, {zip: action.payload})
  
      case UPDATE_IMAGEURL:
        return Object.assign({}, state, {imageUrl: action.payload})
  
      case UPDATE_MORTGAGE:
        return Object.assign({}, state, {mortgage: action.payload})
  
      case UPDATE_DESIREDRENT:
        return Object.assign({}, state, {desiredRent: action.payload})
  
      case CLEAR_INPUT: 
        let clearedInputs = {
          name: '',
          address: '',
          city: '',
          stateName: '',
          zip: '',
          imageUrl: '',
          mortgage: '',
          desiredRent: ''
        }
        return Object.assign({}, state, clearedInputs)
  
      default:
        return state;
    }
  }
  
  export function updateName(name){
    return{
      type: UPDATE_NAME,
      payload: name
    }
  }
  
  export function updateAddress(address){
    return{
      type: UPDATE_ADDRESS,
      payload:address
    }
  }
  
  export function updateCity(city){
    return{
      type: UPDATE_CITY,
      payload: city
    }
  }
  
  export function updateStateName(state){
    return{
      type: UPDATE_STATENAME,
      payload: state
    }
  }
  
  export function updateZip(zip){
    return{
      type: UPDATE_ZIP,
      payload: zip
    }
  }
  
  export function updateImageUrl(url){
    return{
      type: UPDATE_IMAGEURL,
      payload: url
    }
  }
  
  export function updateMortgage(mortgage){
    return{
      type: UPDATE_MORTGAGE,
      payload: mortgage
    }
  }
  
  export function updateRent(rent){
    return{
      type: UPDATE_DESIREDRENT,
      payload: rent
    }
  }
  
  export function clearInputs(){
    return {
      type: CLEAR_INPUT
    }
  }