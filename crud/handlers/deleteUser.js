const resource = require('../service/resource')
const queryString = require('querystring')

function deleteUser(response, dataReceived) {
    var userDetails = resource.getUser();
    var id = queryString.parse(dataReceived).idToDelete;
    userDetails.forEach((element, index) => {
        if (element.id == id) {
            userDetails.splice(index, 1);
        }
    })
    resource.afterDelete(userDetails);
    response.writeHead(302, {
        'Location': '/display'
    });
    response.end()
}

exports.deleteUser = deleteUser;