'use strict'

const db = require('./db');

const data = {
  campus: [
    { name: 'Fullstack Academy', image: 'FSAplaceholder' },
    { name: 'GraceHopper Academy', image: 'GHplaceholder' }
  ],
  student: [
    { name: 'John Doe', email: 'johndoe@gmail.com', campusId: 1 },
    { name: 'Jane Doe', email: 'janedoe@gmail.com', campusId: 2 },
    { name: 'Jesus Christ', email: 'jesuschrist@gmail.com', campusId: 1 },
    { name: 'Mother Teresa', email: 'motherteresa@gmail.com', campusId: 2 }
  ]
}

const dataKeys = Object.keys(data);


db.sync({ force: true })
  .then(function () {
    console.log("Dropped old data, now inserting hard-coded data");
    return dataKeys.map((name) => {
      return data[name].map((item) => {
        return db.model(name).create(item);
      });
    });
  })

  .then(function () {
    console.log("Finished inserting data");
  })
  .catch(function (err) {
    console.error('Error seeding database', err);
  });
