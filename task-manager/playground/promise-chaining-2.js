require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5ed0fa07b885c9bde3305d87').then((task) => {
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result);
})