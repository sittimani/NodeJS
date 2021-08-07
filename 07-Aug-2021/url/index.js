const url = require('url')


const myUrl = new URL('https://user:pass@localhost:8080/review?username=mani#')

console.log(myUrl.href)

console.log(myUrl.pathname);

console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.searchParams.get('username'));

console.log(myUrl.port);