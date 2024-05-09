TodoApp Backend

This is the backend for a TodoApp built with MongoDB, Express.js, Node.js (Mongoose, dotenv). It provides APIs to manage todos.

Features
Create, Read, Update, and Delete (CRUD) operations for todos.
Use MongoDB as the database with Mongoose as the ODM.
Environment variables managed with dotenv.
Tested with Postman.
Monitor database with MongoDB Compass.

Installation
Clone the repository:
bash
Copy code
git clone [https://github.com/your-username/todoapp-backend](https://github.com/Sahiljain24/todoapp.git
Install dependencies:
bash
Copy code
cd todoapp-backend
npm install
Create a .env file in the root directory and add your environment variables:
plaintext
Copy code
PORT=3000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
Run the server:
bash
Copy code
npm start

Usage
Once the server is running, you can interact with the API using a tool like Postman or any HTTP client.
Use the following endpoints to manage todos:
GET /todos: Get all todos.
POST /todos: Create a new todo.
GET /todos/:id: Get a specific todo by ID.
PUT /todos/:id: Update a todo by ID.
DELETE /todos/:id: Delete a todo by ID.
Ensure to include authentication headers when accessing secured endpoints. You may use JWT tokens for authentication.
Testing with Postman
You can import the Postman collection provided in the postman directory to test the API endpoints.

Dependencies
Express.js: Web application framework for Node.js.
Mongoose: MongoDB object modeling tool.
dotenv: Loads environment variables from a .env file.
 
 
Database
MongoDB: NoSQL database.
MongoDB Compass: GUI for MongoDB.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
