const server = require('./config/server')
const handler = require('./config/handler')
const router = require('./loader/router')


var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle['/display'] = handler.display;
handle['/adduser'] = handler.addUser;
handle['/addNewUser'] = handler.home;
handle['/update'] = handler.home;
handle['/deleteUser'] = handler.deleteUser;
handle['/updateUser'] = handler.updateUser;


server.startServer(router.route, handle);