const queryString = require('querystring')
const resource = require('../service/resource')

function addUser(response, dataReceived) {
    var firstName = queryString.parse(dataReceived).firstName;
    var lastName = queryString.parse(dataReceived).lastName;
    var gender = queryString.parse(dataReceived).gender;
    var age = queryString.parse(dataReceived).age;
    var email = queryString.parse(dataReceived).email;
    var details = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age,
        email: email
    }
    resource.pushuser(details)
    response.writeHead(302, {
        'Location': '/display'
    });
    response.end()
}

exports.addUser = addUser;