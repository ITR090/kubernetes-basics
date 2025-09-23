
### 3. MicroService_API_Kubernetes

A microservice project where:
Each microservice deployed in to one pod which communicate with each other via services, Users and tasks are external (loadbalancer) and Auth is internal (clusterip).<br />

Focus: Kubernetes Namespaces & Contexts. <br />
Tools: Kubernetes (Docker Desktop or Minikube), kubectl. 

### ✅ Steps
1. Start Minikube:
```bash
minikube start driver=docker
```
2. Run to apply deployment file:
```bash
kubectl apply -f=auth-deployment.yaml -f=auth-service.yaml -f=configmap.yaml -f=tasks-deployment.yaml -f=tasks-deployment.yaml -f=users-service.yaml -f=tasks-service.yaml -f=users-deployment.yaml
```
3. Get namespaces:
```bash
Kubectl get ns or kubectl get namespace
```
4. Creating new namespace:
```bash
Kubectl create namespace (name)
```
5. Get pods in namespace:
```bash
Kubectl --namespace (name) get pods
```
6. View kubectl Configuration file: 
```bash
kubectl config view
```
7. To get all available contexts
```bash
kubectl config get-contexts
```

8. Show current context
```bash
kubectl config current-context
```

9. Create new context
```bash
Kubectl config set-context sit-context --namespace=sit --user=minikube --cluster=minikube
```

10. Switch to context
```bash
kubectl config use-context (contextname)
```

11. Clean up with
```bash
kubectl delete -f=auth-deployment.yaml -f=auth-service.yaml -f=configmap.yaml -f=tasks-deployment.yaml -f=tasks-deployment.yaml -f=users-service.yaml -f=tasks-service.yaml -f=users-deployment.yaml
```

12. Delete context
```bash
kubectl config delete-context (contextname)
```