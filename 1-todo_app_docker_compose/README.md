
# MERN Stack with Docker Compose

## Description
This project demonstrates a full-stack MERN application (MongoDB, Express/Node.js backend, React frontend) deployed with Docker Compose and Nginx as a reverse proxy.


## Environment Variables:

- Add .env file under backend for node env
- NODE_ENV=production / development

1. For Local development:

- Add env folder under backend folder then add .env.development file
- MONGO_URL= database url
- NODE_PORT= node port

2. For Docker:

- Add env folder under backend folder then add .env.production file
- MONGO_URL= databace url
- NODE_PORT= node port

## Start React Frontend
```
cd frontend
npm install
npm run dev
```

## Start Node.js Backend

```
cd backend
npm install
npm run start
```
