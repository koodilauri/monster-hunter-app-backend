[![Build Status](https://travis-ci.org/koodilauri/monster-hunter-app-backend.svg?branch=master)](https://travis-ci.org/koodilauri/monster-hunter-app-backend)

## Heroku links: 

- [App in heroku](https://monster-hunter-app.herokuapp.com/)
- [Backend in heroku](https://monster-hunter-app-api.herokuapp.com/submission)


# Install:
- You need to install [Docker](https://www.docker.com/) and [Docker-compose](https://docs.docker.com/compose/install/) for running the Postgres database
- Install Node.js >=8.4 using [nvm](https://github.com/creationix/nvm)
- Clone this repository install dependencies with `npm i`
- This project uses .env for storing environment variables. Copy the development variables using `cp .env.development .env`
- Start the database server using Docker with npm run db:start
- Initialize the database with npm run db:init (resets the schema, runs migrations and adds test data) 
- Run the development server using npm run nodemon or the non-daemon version with npm start