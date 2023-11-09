# User Management API

This project provides a set of RESTful API endpoints for user management using Node.js and Express. It includes functionality for creating, updating, deleting, and retrieving user information from a MongoDB database.

## Installation

1. Install dependencies: MOngoose, Express, Bcrypt, Node.js
2. Configure the MongoDB connection:

   Update the MongoDB connection details in the `model/users.model.js` file.

## API Endpoints

### 1. Create User

- **Endpoint:** `POST /user/create`
- **Description:** Create a new user.
- **Request Body:**
  - Example:
    ```json
    {
      "username": "example",
      "email": "example@example.com",
      "password": "password123"
    }
    ```
- **Response:**
  - Success:
    ```json
    {
      "isSuccess": true,
      "data": {
        "message": "User created successfully"
      }
    }
    ```
  - Failure:
    ```json
    {
      "isSuccess": false,
      "data": {
        "message": "User creation failure due to...",
        "error": "error_message_here"
      }
    }
    ```

### 2. Update User

- **Endpoint:** `PUT /user/edit/:email`
- **Description:** Update user information.
- **Request Params:**
  - `email`: The email address of the user to be updated.
- **Request Body:**
  - Example:
    ```json
    {
      "username": "new_username",
      "password": "new_password"
    }
    ```
- **Response:**
  - Success:
    ```json
    {
      "isSuccess": true,
      "data": {
        "username": "new_username",
        "email": "user@example.com",
        "password": "hashed_password_here"
      }
    }
    ```
  - Failure:
    ```json
    {
      "isSuccess": false,
      "data": {
        "message": "User not Found"
      }
    ```

### 3. Delete User

- **Endpoint:** `DELETE /user/delete/:email`
- **Description:** Delete a user by email.
- **Request Params:**
  - `email`: The email address of the user to be deleted.
- **Response:**
  - Success:
    ```json
    {
      "isSuccess": true,
      "data": "User deleted."
    }
    ```
  - Failure:
    ```json
    {
      "isSuccess": false,
      "data": {
        "message": "User not Found",
        "error": "error_message_here"
      }
    ```

### 4. Get All Users

- **Endpoint:** `GET /user/getAll`
- **Description:** Retrieve all users.
- **Response:**
  - Success:
    ```json
    [
      {
        "username": "user1",
        "email": "user1@example.com",
        "password": "hashed_password_here"
      },
      {
        "username": "user2",
        "email": "user2@example.com",
        "password": "hashed_password_here"
      },
      ...
    ]
    ```
  - Failure:
    ```json
    {
      "isSuccess": false,
      "data": "Error message here"
    }
    ```

### 5. Get One User

- **Endpoint:** `GET /user/get/:email`
- **Description:** Retrieve a user by email.
- **Request Params:**
  - `email`: The email address of the user to be retrieved.
- **Response:**
  - Success:
    ```json
    {
      "username": "user1",
      "email": "user1@example.com",
      "password": "hashed_password_here"
    }
    ```
  - Failure:
    ```json
    {
      "isSuccess": false,
      "data": {
        "message": "User not Found"
      }
    }
    ```

## Technologies Used

- Node.js
- Express
- MongoDB
- bcrypt