const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');
const authController = require('./controllers/authController');
const tasksController = require('./controllers/tasksController');
const rbacMiddleware = require('./middleware/rbacMiddleware');

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/tasks', rbacMiddleware.checkPermission('user'), tasksRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});