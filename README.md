### install MondoDB as service

### Run without Docker

##### in project root:
- npm i

##### run frontend
- cd frontend
- npm i
- npm run start

##### run backend (from project root)
- cd backend
- npm i
- npm run start
- rename .env.example to .env

### Run with Docker
- install docker and docker-compose
- run "docker-compose up"
- Open http://localhost:8081

### for authentication:
- add context function to apollo service instance
- add additional middlewares
