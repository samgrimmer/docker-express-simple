# docker-express-simple

Simple Node.js express app with docker file and kubernetes deployment yml file.

## Getting started

### Docker

```
# build docker image and tag
docker build -t docker-express-simple .

# check created docker image
docker image list

# run docker image and map internal container port to external port
docker run -d -p 8080:80 docker-express-simple

# check running docker process (to obtain [container-id])
docker ps

# stop docker process
docker stop [container-id]
```

### Kubernetes

```
# show configure settings
kubectl config view

# get current context
kubectl config current-context 

# switch context to different cluster
kubectl config use-context cluster-name

# deploy docker image to kubernetes cluster using yml
kubectl create -f docker-express-simple.yml

# get kubernetes deployments
kubectl get deployments

# get kubernetes replicate sets
kubectl get rs

# get kubernetes pods
kubectl get pods

# get kubernetes service
kubectl get svc

# delete kubernetes deployment
kubectl delete deployment docker-express-simple-deployment

# delete kubernetes service
kubectl delete service docker-express-simple-deployment
