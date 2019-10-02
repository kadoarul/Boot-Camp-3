//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://kadoarul:Getharanath0@bc2-jyo11.mongodb.net/test?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: 'd1f35840d29945b5b1cbc06b0982206b' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};