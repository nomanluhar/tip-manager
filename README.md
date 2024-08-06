# Tip Manager

A backend service for managing and calculating tips, allowing users to sign up, log in, calculate tips, and retrieve tip records.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

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

2. **Install Dependencies**

    ```bash
    npm install

## Environment Variables

    ```bash
    # JWT Secret for signing tokens
    JWT_SECRET=your_jwt_secret

    # MongoDB URI
    MONGODB_URI=mongodb://localhost:27017/tipmanager

    # Port on which the server will run
    PORT=5000

