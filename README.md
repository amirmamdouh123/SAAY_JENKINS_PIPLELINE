# DevOps Project: Frontend, Backend, and Jenkins Integration with AWS EKS

## Project Overview

This project consists of a **Frontend** and **Backend** application that is deployed on **AWS EKS** (Elastic Kubernetes Service) using **Jenkins** for Continuous Integration and Continuous Deployment (CI/CD). The project integrates a **Jenkins EC2 instance** with a **GitHub repository** to automatically pull updates each time new code is pushed to the repo.

## Key Components
1. **Frontend Application**: The UI layer of the application, hosted on Kubernetes in an AWS EKS cluster.
2. **Backend Application**: The API layer of the application, also hosted on Kubernetes within the same AWS EKS cluster.
3. **Database**: A database service connected to the backend, running as part of the Kubernetes setup.
4. **Jenkins EC2 Instance**: A Jenkins instance on AWS that automates the process of building, testing, and deploying updates to the frontend, backend, and database services.
5. **AWS EKS**: A managed Kubernetes service on AWS that hosts and manages the deployment of the frontend, backend, and database containers.

## Architecture

- **GitHub Repo**: Holds the source code for the frontend and backend applications.
- **Jenkins EC2 Instance**: Listens for updates in the GitHub repo and triggers Jenkins jobs to build and deploy the applications to AWS EKS.
- **AWS EKS Cluster**: Manages the Kubernetes pods, services, and deployments for the frontend, backend, and database.
- **Kubernetes Deployments**: Each application (frontend, backend, database) is managed via Kubernetes deployments, with appropriate services exposed for internal and external access.

## CI/CD Pipeline

- **Jenkins Integration**: Jenkins pulls updates from GitHub whenever new commits are pushed to the repo.
- **Build Process**: Jenkins builds Docker images for the frontend, backend, and database applications.
- **Deployment Process**: Jenkins pushes the Docker images to AWS ECR (Elastic Container Registry), and then updates the Kubernetes deployments in the AWS EKS cluster.
  
### Jenkins Pipeline:
1. **GitHub Webhook** triggers the Jenkins pipeline.
2. Jenkins pulls the latest code from the GitHub repository.
3. Jenkins builds Docker images for the frontend, backend, and database.
4. The Docker images are pushed to AWS ECR.
5. Kubernetes deployments are updated in EKS using `kubectl` commands.
   help you present the structure of your project clearly, and guide anyone who needs to understand or contribute to it.
