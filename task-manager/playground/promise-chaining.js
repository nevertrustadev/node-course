require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5ed0f7c02c8910bbbc07c889', {age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1});
}).then((result) => {
    console.log(result);
}). catch((e) => {
    console.log(e);
})