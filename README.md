# Tip Manager

A backend service for managing and calculating tips, allowing users to sign up, log in, calculate tips, and retrieve tip records.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Ensure you have Node.js (v14 or higher) installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You need a MongoDB server running. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB server.
- **npm**: This comes with Node.js, but ensure it’s up-to-date.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nomanluhar/tip-manager.git
   cd tip-manager

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Environment Variables

    # JWT Secret for signing tokens
    JWT_SECRET=your_jwt_secret

    # MongoDB URI
    MONGODB_URI=mongodb://localhost:27017/tipmanager

    # Port on which the server will run
    PORT=5000

Replace your_jwt_secret with a strong secret key and mongodb://localhost:27017/tipmanager with your MongoDB connection string if you are using a remote database.

## API Endpoints

1.  User Routes

    POST /api/user/signup

    Description: Create a new user and upload a profile picture.
    Body: multipart/form-data
            {
                name: 'John Doe 
                email: 'john@example.com'
                password: 'password123'
                proPic: 'Profile picture (file)'
            }

    POST /api/user/login

    Description: Log in a user.
    Body: application/json
        {
            email: 'john@example.com'
            password: 'password123'
        }

2.  Tip Routes

    POST /api/tip/calculate

        Description: Calculate and store a tip.
            Body: application/json
            {
                "place": "Hotel Marriot",
                "totalAmount": 1000,
                "tipPercentage": 15
            }

    GET /api/tip

    Description: Retrieve tip records within a date range.
    Query Parameters:
        startDate: Start date (format: mm-dd-yyyy)
        endDate: End date (format: mm-dd-yyyy)

## Running the Application

1. Start MongoDB: Ensure your MongoDB server is running.

2. Start the Server

    ```bash
    npm run start