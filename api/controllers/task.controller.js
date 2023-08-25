const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new Task
exports.create = (req, res) => {
    const task = {
        description: req.body.description,
        completed: req.body.completed || false
     };
  
     Task.create(task)
         .then(data => {
             res.send(data);
         })
         .catch(err => {
             res.status(500).send({
                 message:
                 err.message || "Some error occurred"
             });
         });
};

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
    Task.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        });
    });
};

// Find a single Task with an id
exports.findOne = (req, res) => {
  
};

// Update a Task by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tasks from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tasks
exports.findAllPublished = (req, res) => {
  
};