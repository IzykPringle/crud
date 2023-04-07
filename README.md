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

Installation
--------------------------------

