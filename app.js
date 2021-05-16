const express = require("express");
const todoModle = require("./schema");
const db = require("./db");

const app=express();
app.use(express.json());
const port = 3000;

app.get("/todos", (req, res) => {

    todoModle
    .find({})
    .where({isCompleted:true})
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        res.json(err);
    });


});


app.post("/create/todo", (req, res) => {

const { task, description, deadline, isCompleted, priority } = req.body;



const todo = new todoModle({task, description, deadline, isCompleted, priority});

todo
.save()
.then((result)=>{
    res.json(result);
})
.catch((err)=>{
    res.json(err);
});
});
// task, description, deadline, 
// isCompleted, and priority


app.put("/update/todo", (req, res) => {});


app.delete("/delete/todo", (req, res) => {});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

