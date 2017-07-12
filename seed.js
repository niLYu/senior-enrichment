'use strict'

// const Student = require('./db/models/student');
// const Campus = require('./db/models/student')
const db = require('./db');
const {Student, Campus} = require('./db/models');

const data = {
  student: [
    {name: 'John Doe', email: 'johndoe@gmail.com'},
    {name: 'Jane Doe', email: 'janedoe@gmail.com'},
    {name: 'Jesus Christ', email: 'jesuschrist@gmail.com'},
    {name: 'Mother Teresa', email: 'motherteresa@gmail.com'}
  ],
  campus: [
    {name: 'Fullstack Academy', image: 'FSAplaceholder'},
    {name: 'GraceHopper Academy', image: 'GHplaceholder'}
  ]
}

const dataKeys = Object.keys(data);


db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return dataKeys.map((name) => {
    return data[name].map((item) => {
      return db.model(name).create(item);
    });
  });
})

.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err);
});
