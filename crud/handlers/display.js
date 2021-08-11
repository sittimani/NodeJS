const resource = require('../service/resource')

function display(response) {
    userDetails = resource.getUser();
    var html = `
    <html>
        <body>
            <style>
                table, th, td{
                    border: 1px solid black;
                }
            </style>
            <table>
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>gender</th>
                    <th>age</th>
                    <th>email</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>`
                userDetails.forEach(element => {
                    html +=
                        `<tr>
                            <td>${element.firstName}</td>
                            <td>${element.lastName}</td>
                            <td>${element.gender}</td>
                            <td>${element.age}</td>
                            <td>${element.email}</td>
                            <td>
                                <form action="/update" method="post">
                                    <input type="number" value="${element.id}" name="idToUpdate" style="display:none"><br>
                                    <input type="submit" value="update">
                                </form>
                            </td>
                            <td>
                                <form action="/deleteUser" method="post">
                                    <input type="number" value="${element.id}" name="idToDelete" style="display:none"><br>
                                    <input type="submit" value="delete">
                                </form>
                            </td>
                        </tr>`
                })
                html += `
            </table>
            <p><a href="/addNewUser">AddUser</a></p>
        </body>
    </html>`
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html)
    response.end();
}

exports.display = display;