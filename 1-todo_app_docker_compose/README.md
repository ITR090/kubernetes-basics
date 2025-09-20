
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

## Userfull Docker Commands 

1. Start Docker Container 
```
docker-compose up -d
```

2. Re-Build images without running container
```
docker-compose up -d --build 
```

3. List Runing Containers
```
docker ps 
```

4. Run to shotdown and delete volumes
```
docker-compose down -v
```

5. To enter inside container
```
docker exec -it container name bash
```

6. To check container logs in case of any errors
```
docker logs container_id
```

7. To Remove an image
```
docker images 
docker rmi image_id 
```

8. To list docker Network
```
docker network ls
```