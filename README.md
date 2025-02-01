Project Overview
This project consists of a Frontend and Backend application that is deployed on AWS EKS (Elastic Kubernetes Service) using Jenkins for Continuous Integration and Continuous Deployment (CI/CD). The project integrates a Jenkins EC2 instance with a GitHub repository to automatically pull updates each time new code is pushed to the repo.

Key Components
Frontend Application: The UI layer of the application, hosted on Kubernetes in an AWS EKS cluster.
Backend Application: The API layer of the application, also hosted on Kubernetes within the same AWS EKS cluster.
Database: A database service connected to the backend, running as part of the Kubernetes setup.
Jenkins EC2 Instance: A Jenkins instance on AWS that automates the process of building, testing, and deploying updates to the frontend, backend, and database services.
AWS EKS: A managed Kubernetes service on AWS that hosts and manages the deployment of the frontend, backend, and database containers.
Architecture
GitHub Repo: Holds the source code for the frontend and backend applications.
Jenkins EC2 Instance: Listens for updates in the GitHub repo and triggers Jenkins jobs to build and deploy the applications to AWS EKS.
AWS EKS Cluster: Manages the Kubernetes pods, services, and deployments for the frontend, backend, and database.
Kubernetes Deployments: Each application (frontend, backend, database) is managed via Kubernetes deployments, with appropriate services exposed for internal and external access.
CI/CD Pipeline
Jenkins Integration: Jenkins pulls updates from GitHub whenever new commits are pushed to the repo.
Build Process: Jenkins builds Docker images for the frontend, backend, and database applications.
Deployment Process: Jenkins pushes the Docker images to AWS ECR (Elastic Container Registry), and then updates the Kubernetes deployments in the AWS EKS cluster.
Jenkins Pipeline:
GitHub Webhook triggers the Jenkins pipeline.
Jenkins pulls the latest code from the GitHub repository.
Jenkins builds Docker images for the frontend, backend, and database.
The Docker images are pushed to AWS ECR.
Kubernetes deployments are updated in EKS using kubectl commands.
