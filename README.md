🧩 Task Management REST API

A simple RESTful API built with Node.js + Express that manages tasks (to-do items).
This project uses in-memory storage (JavaScript object) and includes:

CRUD Operations

Validation

UUID-based ID generation

Basic error handling

Modular folder structure

📁 Project Structure
project/
│   server.js
│   package.json
│   README.md
│
└───src/
    │   app.js
    │
    ├── controllers/
    │     taskControllers.js
    │
    ├── validation/
    │     taskValidation.js
    │
    ├── data/
    │     taskDB.js
    │
    ├── routes/
    │     taskRoutes.js
    │
    ├── middleware/
    │     errorHandler.js
    │
    └── utils/
          checkTaskExists.js

🚀 How to Run the Project
1️⃣ Install Dependencies
npm install

2️⃣ Start the Server (Development Mode)
npm run dev

3️⃣ Server Runs On
http://localhost:3000

📌 API Endpoints
1. Create Task

POST /tasks

Sample Body
{
  "title": "Learn Node.js",
  "description": "Finish building the Task API",
  "status": "pending"
}

2. Get All Tasks

GET /tasks

Returns all stored tasks.

3. Get Task by ID

GET /tasks/:id

4. Update Task

PUT /tasks/:id

Sample Body
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed"
}

5. Delete Task

DELETE /tasks/:id

🧪 Testing the API (Postman / Thunder Client)

Send requests to:

http://localhost:8080/tasks


Examples:

POST → Create tasks

GET → View all tasks

GET /:id → Get one task

PUT /:id → Update

DELETE /:id → Remove

🔍 Validation Rules

Your request must include:

Field	Type	Rules
title	string	Required, non-empty
description	string	Required, non-empty
status	string	Optional → must be "pending" or "completed"

If validation fails → API returns:

400 Bad Request

🗄 In-Memory Storage

Tasks are stored inside:

src/data/taskDB.js


Example:

{
  "uuid-123": {
     id: "uuid-123",
     title: "Test",
     description: "Example",
     status: "pending",
     createdAt: "...",
     updatedAt: "..."
  }
}

⚙️ Error Handling

Centralized error handler is available in:

src/middleware/errorHandler.js


Handles unexpected server errors and returns:

500 Internal Server Error

🔧 Technologies Used

Node.js

Express.js

UUID

Nodemon

📬 Author

Created by Tejas
For Osumare Marketing Solutions – Backend Assignment
