# crud

Background
--------------------------------
The crud app, Grocery Stock Galore, is a fullstack application consisting of a front-end, back-end, and database built to satisfy Galvanize SDI #15 Z-prefix requirements for the CRUD Application Project, which can be found in the /background-info folder.  It is a simple inventory site that displays mock grocery information.  Visitors can browse all inventory items, and logged in Inventory Managers can add, update, delete, and browse inventory items.

The front-end is built using the React JavaScript library.  It does not use additional libraries outside of React, and all css styling has been done manually.  The back-end is built using Express.js, and uses Knex.js to build queries for the database.  the back-end also requires the cors, nodemon, and postgresql dependencies.  The database is a postgresql image/container running on Docker.  Seed data for the database was generated via https://www.mockaroo.com/

Requirements
--------------------------------
 - Google Chrome Browser -- https://www.google.com/chrome/
 - Ubuntu (or similar) OS -- https://learn.microsoft.com/en-us/windows/wsl/install
 - Docker -- https://docs.docker.com/get-docker/
 - Make sure nothing is running on ports localhost:3000, localhost:8080, and localhost:5432 

Installation & First Run
--------------------------------
Installation commands are an aggrigation of individual commands which can be found in their respective package.json files, and have been bundled into the project root /crud folder for convienence. Alternate scripts can be found in the root package.json as well.

Step 0: Install postgres Docker Image

It is assumed that a postgresql docker image with the name "postgres", user "postgres", and password "docker" is present on the user's system.  If not, please install it via the following commands:

Step 1: Install Dependencies

In a terminal, navigate to the /crud folder.
Run the following command: npm run dependencyinstall
This installs all dependencies in in the frontend and backend folders.

Step 2: Initialize a Docker Container
In the same terminal, run the following command: npm run backendspinup
This does 4 things: starts a container from the postgres image, creates a database in that container, seeds that database with data, and starts the backend server on port 8080.

Step 3: Start the Frontend
In a new terminal, navigate to the /crud folder.
Run the following command: npm run startfrontend
This starts the frontend react app.

The app is now up and running.  Please troubleshoot installation problems by reading the error message in the terminal, navigating the the directory where the problem is occuring, and running the appropriate commands or scripts found in the directory's package.json file.

Running After Installation
--------------------------------
After the application has been installed, to run the app after it has been exited please follow the steps below.

Step 1: Start the Docker Container
Open Docker Desktop, go to containers, and click start on the 'cruddb' container.

Step 2: Start the Backend
In a terminal, navigate to the /crud folder.
Run the following command: npm run startbackend

Step 3: Start the Frontend
In a new terminal, navigate to the /crud folder.
Run the following command: npm run startfrontend
This starts the frontend react app.


