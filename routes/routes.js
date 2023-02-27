module.exports = app => {
    const router = require('express').Router();
    router.get('/', (req, res) => {
        res.send({ message: 'Hello from SvinDzjuba!' });
    });
    app.use('/', router);
}