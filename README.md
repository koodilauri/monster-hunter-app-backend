[![Build Status](https://travis-ci.org/koodilauri/monster-hunter-app-backend.svg?branch=master)](https://travis-ci.org/koodilauri/monster-hunter-app-backend)

## Heroku links: 

- [App in heroku](https://monster-hunter-app.herokuapp.com/)
- [Backend in heroku](https://monster-hunter-app-api.herokuapp.com/submission)


# Install:
- Backend requires [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/)
- Download the backend repository
- Get dependencies with `npm install`
- Create .env file with `cp .env.development .env`
- Run `npm run db:start` and `npm run db:init`(or `npm run db:reset`, `npm run db:migrate`, `npm run db:add`) to start and create the db
- To run backend locally, use `npm run nodemon`