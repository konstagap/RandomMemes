## This is Random meme project

React, Redux, Node, Express, MongoDB, project.
# It utilizes passport.js, local strategy with sessions and cookies as well as facebook and google OAUTH strategies.

## How to run the app

_Make sure to run the `mongod` service before running the app locally._

- Go to /client and run npm install in terminal.
- Go to /server and run npm install in terminal.
- run npm install in the root of project.
- create .env file in root folder, populate with your own setup:
  - DB_STRING="ex. mongodb://localhost:27017/expressauthtut'
  - SECRET="secret for session storage"
  - GOOGLE_CLIENT_ID='go to google developers console, create account and get client id for google oauth services'
  - GOOGLE_CLIENT_SECRET=''go to google developers console, create account and get client secret for google oauth services'
  - FACEBOOK_CLIENT_ID='go to facebook developers page, create account and get client id for facebook oauth services'
  - FACEBOOK_CLIENT_SECRET='go to facebook developers page, create account and get client secret for facebook oauth services'
  - CLIENT_BASE_URL=http://localhost:3000
  - SERVER_BASE_URL=http://localhost:3001
- in the root folder run npm start, it will start server and client on localhost:3000 and localhost:3001
