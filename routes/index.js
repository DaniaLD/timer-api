const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.route('/')
    .get((req, res) => {
        Task.find({}, (err, data) => {
            err ? 
                res.status(400).json({"Message": `Couldn't get tasks. Error => ${err}`}) :
                res.status(200).json(data);
        });
    })
    .post((req, res) => {
        const newTask = new Task();

        newTask.title = req.body.title;
        newTask.startedAt = req.body.startedAt;
        newTask.finishedAt = req.body.finishedAt;
        newTask.describtion = req.body.describtion;

        newTask.save(err => {
            if (err) {
                res.status(400).json({"Message": `Couldn't save the new task. Error => ${err}`});
            } else {
                console.log("New task has been saved successfully ...");
                res.status(201).json(newTask);
            }
        });
    });

router.get('/today', (req, res) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear(); 

    Task.find({ $or: [
        { startedAt: { 
            $gte: new Date(year, month, day, 00, 00, 00, 000),
            $lte: new Date(year, month, day, 23, 59, 59, 999) }
        },
        { finishedAt: {
            $gte: new Date(year, month, day, 00, 00, 00, 000),
            $lte: new Date(year, month, day, 23, 59, 59, 999) }
        }] },
        (err, data) => {
            if (err) {
                res.status(400).json({"Message": `Couldn't get today tasks. Error => ${err}`});
            } else {
                res.status(200).json(data);
            }
        }
    )
});

router.route('/:id')
    .put((req, res) => {
        Task.findOneAndUpdate({ _id: req.params.id }, req.body,
            { returnNewDocument: true,
              useFindAndModify: false },
            err => {
                if (err) {
                    res.status(400).json({"Message": `Couldn't update the task. Error => ${err}`});
                } else {
                    res.status(200);
                }
            }
        ).then(task => res.json(task));
    })
    .delete((req, res) => {

    });

module.exports = router;