# Mood Journal Setup Documentation

## Pre-requisites
1. **Node.js** installed on your machine (version 12.x or higher recommended).
2. **MongoDB** installed and running, or use **MongoDB Atlas** for a cloud solution.

## Step 1: Install MongoDB
If you haven't installed MongoDB, here’s how you can do that:

### On Windows:
1. Download the MongoDB Community Server from [MongoDB's official website](https://www.mongodb.com/try/download/community).
2. Follow the installation instructions.
3. Start the MongoDB server by running `mongod` in your terminal or command prompt.

### On macOS:
You can install MongoDB using Homebrew:
```bash
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb/brew/mongodb-community
