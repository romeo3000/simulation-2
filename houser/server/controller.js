module.exports = {
  
    getProperties: (req, res, next) => {
      req.app.get('db').get_properties()
      .then( (properties) =>{
        res.status(200).send(properties)
      })
      .catch(err => console.log(err))
    },
  
    postProperty: (req, res, next) => {
      let { propertyname, address, city, state, zip, image, mortgageamt, desiredrent } = req.body
      req.app.get('db').post_property( [propertyname, address, city, state, zip, image, mortgageamt, desiredrent ] )
      .then( () => res.sendStatus(200) )
    },
  
    deleteProperty: (req, res, next) => {
      req.app.get('db').delete_property( req.params.id )
      .then( req.app.get('db').get_properties )
  
    }
  
  }