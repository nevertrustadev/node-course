const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on ' + port);
});



const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = "sausage69";
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('sausage69', hashedPassword);

    console.log(isMatch)
};




myFunction()