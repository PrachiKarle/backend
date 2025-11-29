Project Report

--------------------------------------------------------------

1. Introduction

This project is a simple Task Management REST API built using Node.js and Express.js.
It demonstrates the ability to perform CRUD operations (Create, Read, Update, Delete) on a dataset stored either in memory or in a JSON file.

The goal of the assignment was to design clean API endpoints, handle errors safely using try–catch, and follow structured API development practices.

----------------------------------------------------

2. Tech Stack

 Node.js
 Express.js
 REST API Architecture

------------------------------------------

3. Project Flow & Approach

3.1 Server Setup

The Express server is initialized using:

const express = require("express");
const app = express();
app.use(express.json());

Middlewares:

 express.json() – parse JSON body
 express.urlencoded() – parse form data

---------------------------------------------

3.2 Data Storage Approach

Approach Used

The tasks are stored in a simple JavaScript array of objects, with each task containing:
{
  id: 1,
  name: "task1",
  desc: "This is task1"
}

Why this approach?

 Easy to handle CRUD operations
 No database configuration needed
 Perfect for learning REST API basics

--------------------------------------------------

3.3 Algorithm Choices

1. GET All Tasks Algorithm

Simply return the array of objects
res.json(task);

Time complexity: O(1)
Efficient because no computation is needed.

-------------------------------------------------

2. GET Task by ID Algorithm

 Use Array.filter()
 Returns task(s) whose id matches

task.filter(val => val.id == id);

Time complexity: O(n)
Efficient for small and medium data.

--------------------------------------------------------

3. POST Task Algorithm

 Read request body
 Auto-generate unique ID using Date.now()
 Push into array

task.push(newTask);

Time complexity: O(1)

--------------------------------------------------------------

4. PUT Task (Update)

 Use map() to update matching record
 Modify name & description

task.map(val => { if(val.id == id) update... })

Time complexity: O(n)

---------------------------------------------------------------------

5. DELETE Task Algorithm

 Use filter() to remove the matching element

task = task.filter(val => val.id != id);

Time complexity: O(n)
Simple and clean deletion logic.

----------------------------------------------------------------------------

3.4 Error Handling

Every endpoint includes try–catch to catch API errors:

try {
   // logic
} catch(err) {
   res.status(500).json({ error: err.message });
}

This prevents server crashes and returns meaningful error responses.

-----------------------------------------------------------------------------

4. Conclusion

The project meets all requirements:

  Clean & documented API
  Proper CRUD operations
  Error handling using try–catch
  Clear algorithmic reasoning
  Easy-to-understand file structure

This API can be extended in the future using a database like MongoDB or MySQL.