    resource "aws_eks_cluster" "saayeks" {
    name = "saayeks"
    role_arn = aws_iam_role.eks_role.arn
    
    vpc_config {
        subnet_ids = [ aws_subnet.private_subnet.id,  aws_subnet.public_subnet.id ]
    }

    depends_on = [ aws_iam_role_policy_attachment.eks-AmazonEKSClusterPolicy ]  //enable eks to access EC2 instances

    }

    resource "aws_iam_role" "eks_role" {
  name = "eks_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Principal = {
          Service = "eks.amazonaws.com"
        }
        Effect = "Allow"
        Sid    = ""
      }
    ]
  })
}

    resource "aws_iam_role_policy_attachment" "eks-AmazonEKSClusterPolicy" {
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
    role = aws_iam_role.eks_role.name
    }

