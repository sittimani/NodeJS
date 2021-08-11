const queryString = require('querystring')
const resource = require('../service/resource')

function home(response,dataReceived) {
    var indexToUpdate = undefined;
    var idToUpdate = queryString.parse(dataReceived).idToUpdate;
    if(idToUpdate == undefined){
        var path = '/adduser'
        var firstName = ''
        var lastName = ''
        var age = 0
        var email = ''
    }else{
        var userDetails = resource.getUser();  
        userDetails.forEach((element, index) => {
            if(element.id == idToUpdate){
                indexToUpdate = index;
            }
        })
        var path = '/updateUser'
        var firstName = userDetails[indexToUpdate].firstName;
        var lastName = userDetails[indexToUpdate].lastName;
        var gender = userDetails[indexToUpdate].gender;
        var age = userDetails[indexToUpdate].age;
        var email = userDetails[indexToUpdate].email;
    }

    const html =
        `<html>
            <style>
                input{
                    display: block;
                    margin-top: 10px
                }
            </style>
            <body>
                <form action='${path}' method='post'>
                    <input type="text" placeholder="Enter your firstname" name="firstName" value="${firstName}">
                    <input type="text" placeholder="Enter your lastname" name="lastName" value="${lastName}">
                    <label>Gender</label>
                    <input type="radio" name="gender" value="Male" style="display:inline-block" required><label>Male</label>
                    <input type="radio" name="gender" value="Female" style="display:inline-block" required><label>Female</label>
                    <input type="number" placeholder="Enter your age" name="age" value="${age}" required>
                    <input type="email" placeholder="Enter your email" name="email" value="${email}" required>
                    <input type="number" style="display:none" name="indexToUpdate" value=${indexToUpdate}>
                    <input type="submit" value="submit">
                </form>
            </body>
        </html>`
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html)
    response.end()
    //console.log("Home handler")
}

exports.home = home;