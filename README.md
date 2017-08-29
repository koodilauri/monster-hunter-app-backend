[![Build Status](https://travis-ci.org/koodilauri/monster-hunter-app-backend.svg?branch=master)](https://travis-ci.org/koodilauri/monster-hunter-app-backend)

## Heroku links: 

- [App in heroku](https://monster-hunter-app.herokuapp.com/)
- [Backend in heroku](https://monster-hunter-app-api.herokuapp.com/submission)


# Install:
- backend requires docker and docker-compose
- download both frontend and backend repositories
- get dependencies with `npm install`
- use .env.development files to make .env files for frontend and backend
- in backend run `npm run db:start` and `npm run db:init`(or `npm run db:reset` `npm run db:migrate` `npm run db:add`) to start and create the db
- start frontend with `npm start`