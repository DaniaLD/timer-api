const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.route('/')
    .get((req, res) => {
        Task.find({}, (err, data) => {
            err ? console.log(`Couldn't get Tasks. Error => ${err}`) : res.json(data);
        });
    })
    .post((req, res) => {
        const newTask = new Task();

        newTask.title = req.body.title;
        newTask.date = req.body.date;
        newTask.describtion = req.body.describtion;

        
        newTask.save(err => {
            if (err) {
                console.log(`Couldn't save the new task. Error => ${err}`);
            } else {
                console.log('New task has been saved successfully ...');
                res.json(newTask);
            }
        });
    });

router.get('/today', (req, res) => {

});

router.route('/:id')
    .put((req, res) => {

    })
    .delete((req, res) => {

    });

module.exports = router;