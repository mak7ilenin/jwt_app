const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

// Database config
const db = require('./models');
const Role = db.role;
db.sequelize.sync({ force: true })
    .then(() => {
        createRoles();
    });

function createRoles() {
    Role.create({
        id: 1,
        name: 'user',
    });
    Role.create({
        id: 2,
        name: 'moderator',
    });
    Role.create({
        id: 3,
        name: 'admin',
    });
}

// Routes
require('./routes/routes')(app);
require('./routes/user.routes')(app);
require('./routes/auth.routes')(app);