
### 2. React_Node_Kubernetes_App

- **Frontend**: React app served via Nginx.
- **Backend**: Node.js Express app exposing REST APIs.
- The frontend communicates with the backend through Kubernetes services, This will create 2 pods for frontend 2 pods for backend. <br />
Focus: Kubernetes deployment & service <br />
Tools: Kubernetes (Docker Desktop or Minikube), kubectl

### ✅ Steps
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
