
# User Profile Management API

A simple RESTful API built with Node.js, Express, and TypeScript for managing user profiles.

## Prerequisites
- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)

To install Node.js and npm, follow the instructions [here](https://nodejs.org/en/download/).

## Setup Instructions

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kunal-dhadwal/assignmentTest.git
   ```

2. **Install dependencies:**

   **For Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Create the Build:**
   ```bash
   npm run build-mac
   ```

The API will run on `http://localhost:3000`.

## Endpoints

- `POST /api/users` - Create a user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID
- `GET /api/users/sort?sortBy=name|age` - Sort users by name or age
