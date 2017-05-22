# Lab 13: Mongo and Express

## Description
For this lab we created a model using mongoose.Schema and mongoose.model, created routes for doing RESTful CRUD operations, and created routes for GET, PUT, POST, and DELETE. We also did tests for routes with codes 200, 204, 400, and 404.

* For more information see: [class 13](https://github.com/codefellows/seattle-javascript-401d15/tree/master/part-1-backend-development-nodejs/class-13-express-mongo) and [lab 13](https://github.com/codefellows-seattle-javascript-401d15/lab13-mongo-express).

## Version
* 0.1.0

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### MongoDB
* [Install MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
* [The MongoDB 3.4 Manual](https://docs.mongodb.com/manual/#getting-started)
```
brew update
brew install mongodb
mongod --dbpath ./db
```

### JSON Configuration
Initializing package.json
```
npm init
npm install -S bluebird bodyparser express mongoose
npm install -D chai mocha
```

```
"scripts": {
  "test": "mocha",
  "start": "node server.js",
  "watch": "nodemon server.js",
  "dbup": "",
  "dbdown": ""
  }
```

### Dependencies
The result of installation above.

```
"dependencies": {
  "bluebird": "^3.5.0",
  "body-parser": "^1.17.1",
  "express": "^4.15.2",
  "mongoose": "^4.9.7"
  },
  "devDependencies": {
  "chai": "^3.5.0",
  "mocha": "^3.3.0"
  }
```

## Application

Run server:
```
node server.js
```

## Server Endpoints

POST request:
/api/music

GET, PUT, and DELTE request:
/api/music/:id

```
http POST :3000/api/music name=foo details=bar
```

To find database:
```
db.users.find()
```

To empty database:
```
db.users.drop()
```

## Running Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

```
npm run test
npm run debug
```

## Resources

* [MongoDB](https://docs.mongodb.com)
* [Mongoose](http://mongoosejs.com/docs)
* [Node Assert](https://nodejs.org/api/assert.html)
* [Chai Expect](http://chaijs.com/api/bdd/)
* [Chai Assertion Styles](http://chaijs.com/guide/styles/#expect)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget/lab13-mongo-express/blob/lab-13/lab-padget/LICENSE) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor.
* Cayla Zabel, Teaching Assistant.
* Devon Hackley, Teaching Assistant.
* Thomas Martinez, Teaching Assistant.
* JR Iriarte, Teaching Assistant.
