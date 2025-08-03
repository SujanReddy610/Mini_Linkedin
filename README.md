Mini LinkedIn Clone
This is a full-stack web application designed to mimic a basic LinkedIn-like community platform. It allows users to register, log in, create text-only posts, and view a feed of all posts. Each user also has a dedicated profile page to display their own posts.

Live Demo : [Live Demo](https://mini-linkedin-frontend-one.vercel.app)


GitHub Repository: (https://github.com/SujanReddy610/Mini_Linkedin)

Features
User Authentication: Secure registration and login with email and password.

Public Post Feed: A dynamic feed on the homepage to read all posts.

Post Creation: Authenticated users can create new text-only posts.

User Profile Page: Clicking on a user's name navigates to a dedicated profile page showing their posts.

Responsive Design: The application is styled to be usable on different screen sizes.

Professional UI/UX: Features a modern, sticky header with a "glassmorphism" effect and subtle hover animations.

Tech Stack
This project is built on the MERN stack, a popular and powerful full-stack development framework.

Frontend: React

Backend: Node.js with Express.js

Database: MongoDB

Total Commands Used
This is a comprehensive list of all the commands used to build and run the project, from setting up the environment to running the application.

Backend Setup
Navigate into the backend directory:

Bash

cd backend
Initialize a new Node.js project:

Bash

npm init -y
Install all backend dependencies:

Bash

npm install express mongoose cors jsonwebtoken bcryptjs dotenv
Run the backend server in development mode:

Bash

npm start
Frontend Setup
Navigate into the frontend directory:

Bash

cd frontend
Install all frontend dependencies:

Bash

npm install react-router-dom axios bootstrap
Run the frontend development server:

Bash

npm run dev
Setup Instructions
Follow these steps to get the project running locally on your machine.

Clone the repository:

Bash

git clone (https://github.com/SujanReddy610/Mini_Linkedin)
cd cd Mini_Linkedin
Set up the Backend:

Navigate to the backend directory.

Create a .env file and add your MongoDB connection string and a JWT secret key.

MONGO_URI=mongodb://127.0.0.1:27017/mini-linkedin
JWT_SECRET=superSecretKeyForMyLinkedInClone123456789
Run npm install to install dependencies.

Start the server with npm start.

Set up the Frontend:

Navigate to the frontend directory.

Run npm install to install dependencies.

Start the React development server with npm run dev.

The application will be running on http://localhost:5173 (or a similar port), and the API server will be running on http://localhost:5000.

Admin/Demo User Logins
You can register a new user on the application's login page to create a demo account.

Email: 'sujan@gmail.com'

Password: 'sujan1'