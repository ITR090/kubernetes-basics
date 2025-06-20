# 🧩 Kubernetes Projects:

This repository contains multiple projects demonstrating how to deploy and connect React and Node.js (Express) applications using **Kubernetes**. Each project folder contains the full Kubernetes manifests needed to run the app in a local cluster (Minikube)

---

## 📦 Projects Overview

### 1. **kubernetes basics/**
A basic application project where it define each Kubernetes object such as pod, deployment, configmap , secret and service.
### ✅ Prerequisites Steps
#### 1. Start Minikube:
```bash
minikube start driver=docker
```
---
### 2. **react-node kubernetes app 1/**
Tools: Kubernetes (Docker Desktop or Minikube), kubectl
A frontend-backend project where:
- **Frontend**: React app served via Nginx.
- **Backend**: Node.js Express app exposing REST APIs.
- The frontend communicates with the backend through Kubernetes services, This will create 2 pods for frontend 2 pods for backend.
### ✅ Prerequisites Steps
---
1. Enable Kubernetes via Docker Desktop and install Minikube
2. Install kubectl
```bash
minikube start driver=docker
```
3. Build Docker image for the app by pulling from docker-hub
4. Deploy with
```bash
kubectl apply -f deployment.yaml
```
5. Wait for pods to be ready
6. Access the app via minikube service port-forwarding
```bash
minikube service frontend-service
```
7. Test scaling, self-healing by deleting pods
```bash
kubectl delete pod podname
```
8. Check pods status
```bash
kubectl get pods -w
```
9. Clean up with 
```bash
kubectl delete -f deployment.yaml
```

### 3. **express API kubernetes/**
A microservice-style project where:
- There separate **Express.js** APIs communicate with each other.
- Exposes internal and external services for demonstration, Users and tasks are external (loadbalancer) and Auth is internal (clusterip).
### ✅ Prerequisites Steps
#### 1. Start Minikube:
```bash
minikube start driver=docker
```
#### 2. Run to apply deployment file:
```bash
kubectl apply -f=auth-deployment.yaml -f=auth-service.yaml -f=configmap.yaml -f=tasks-deployment.yaml -f=tasks-deployment.yaml -f=users-service.yaml -f=tasks-service.yaml
```
