require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ed0fa07b885c9bde3305d87').then((task) => {
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result);
// })

// 5ec689d50d6dacaff7d245b7


const deleteTaskAndCountCompleted = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: true});

    return count;
}



deleteTaskAndCountCompleted('5ec689d50d6dacaff7d245b7').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})