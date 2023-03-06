# Markdown_Blog

# Environment vars

This project uses the following environment variables:

| Name      | Description                                                                                             | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | ------------- |
| PORT      | Port Number                                                                                             | 5000          |
| MONGO_URL | [MongoDB Atlas Cluster Connection String](https://www.mongodb.com/docs/guides/atlas/connection-string/) | -             |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version v18.13.0

# Getting started

- Clone the repository

```
git clone https://github.com/TerribleCodes/markdown_blog
```

- Install dependencies

```
cd Markdown_Blog
npm install
```

- Build and run the project

```
npm run dev
```

Navigate to `http://localhost:5000`

# Node + Express + MongoDB + EJS

This repository contains a simple Markdown Blog built using NodeJS, ExpressJS, MongoDB and EJS as the view engine which is capable of performing simple CRUD operations.

## Project Structure

The folder structure of this app is explained below:

| Name                        | Description                      |
| --------------------------- | -------------------------------- |
| **models/article**          | Contains the Schemas             |
| **controller/node_modules** | Contains all npm dependencies    |
| **routes/articles.js**      | Contain routes                   |
| **views/articles**          | Contains the view                |
| **.env**                    | Contains environmental variables |
| **.gitignore**              | Contains untracking files        |
| **package.json**            | Contains npm dependencies        |
| **server.js**               | Entry point to express app       |

## Building the project

### Running the build

| Npm Script | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| `dev`      | Runs full build and runs node on /server.js. Can be invoked with `npm run` |
