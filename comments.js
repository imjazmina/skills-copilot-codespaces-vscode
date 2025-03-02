// Create web server
const express = require('express');
const app = express();
const port = 3000;

//parse incoming request
app.use(express.json());

//create comments array
const comments = [];

//GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

//GET /comments/:id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments[id];
    res.json(comment);
});

//PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    comments[id] = newComment;
    res.json(newComment);
});

//DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.status(204).send();
});

//start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});