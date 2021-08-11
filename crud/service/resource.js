var userDetails = [];
var id = 1;

function pushuser(object){
    object['id'] = id++;
    userDetails.push(object);
}

function getUser(){
    return userDetails;
}

function updateUserDetails(object, index){ 
    userDetails[index] = object;
}

function afterDelete(details){
    userDetails = details;
}


exports.afterDelete = afterDelete;
exports.updateUserDetails = updateUserDetails;
exports.pushuser = pushuser;
exports.getUser = getUser;