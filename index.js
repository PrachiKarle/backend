var express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using array object
let task = [
  {
    id: 1,
    name: "task1",
    desc: "This is task1",
  },
];

app.get("/", (req, res) => {
  try {
    res.send("Server is started");
  } catch (err) {
    res
      .status(500)
      .json({ error: "Something went wrong", details: err.message });
  }
});

// GET all tasks
app.get("/tasks", (req, res) => {
  try {
    return res.status(200).json(task);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch tasks", details: err.message });
  }
});

// GET task by ID
app.get("/tasks/:id", (req, res) => {
  try {
    const id = req.params.id;
    let t = task.filter((val) => val.id == id);

    if (t.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(t);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch task", details: err.message });
  }
});

// ADD task
app.post("/tasks", (req, res) => {
  try {
    const t = req.body;
    task.push(t);
    return res.status(200).json({ message: "Task added!!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add task", details: err.message });
  }
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  try {
    const id = req.params.id;

    task = task.filter((val) => val.id != id);

    return res.json({ message: "Task deleted!!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete task", details: err.message });
  }
});

// UPDATE task
app.put("/tasks/:id", (req, res) => {
  try {
    const id = req.params.id;
    const t = req.body;

    task = task.map((val) => {
      if (val.id == id) {
        return { ...val, name: t.name, desc: t.desc };
      }
      return val;
    });

    return res.json({ message: "Task updated!!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update task", details: err.message });
  }
});

// server started
app.listen(3000, () => {
  console.log("Server is running on 3000");
});
