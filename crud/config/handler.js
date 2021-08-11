const addUser = require('../handlers/adduser').addUser;
const home = require('../handlers/home').home;
const deleteUser = require('../handlers/deleteUser').deleteUser;
const update = require('../handlers/update').update;
const updateUser = require('../handlers/update').updateUser;
const display = require('../handlers/display').display;

exports.addUser = addUser;
exports.home = home;
exports.deleteUser = deleteUser;
exports.update = update;
exports.display = display;
exports.updateUser = updateUser;