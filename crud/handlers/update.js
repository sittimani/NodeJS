const queryString = require('querystring')
const resource = require('../service/resource')

// function update(response, dataReceived) {
//     userDetails = resource.getUser();
//     var id = queryString.parse(dataReceived).idToUpdate;
//     var indexToUpdate;
//     userDetails.forEach((element, index) => {
//         if(element.id == id){
//             indexToUpdate = index;
//         }
//     })

//     const html =
//     `<html>
//         <body>
//             <form action='/updateUser' method='post'>
//                 <input type="text" name="username" value="${userDetails[indexToUpdate].name}">
//                 <input type="number" name="age" value="${userDetails[indexToUpdate].age}">
//                 <input type="number" style="display:none" name="indexToUpdate" value=${indexToUpdate}>
//                 <input type="submit" value="update">
//             </form>
//         </body>
//     </html>`
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(html)
//     response.end()
// }

function updateUser(response, dataReceived){
    var firstName = queryString.parse(dataReceived).firstName;
    var lastName = queryString.parse(dataReceived).lastName;
    var gender = queryString.parse(dataReceived).gender;
    var age = queryString.parse(dataReceived).age;
    var email = queryString.parse(dataReceived).email;
    var index = queryString.parse(dataReceived).indexToUpdate;
    var object = {
        id: resource.getUser()[index].id,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age,
        email: email
    }
    resource.updateUserDetails(object, index);
    response.writeHead(302, {
        'Location': '/display'
    });
    response.end()
}

exports.updateUser = updateUser;
//exports.update = update;