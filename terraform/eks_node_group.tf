# private node group

# resource "aws_eks_node_group" "saay_private_node_group" {
#   cluster_name = aws_eks_cluster.saay_eks.name
#   node_group_name = "saay_private_node_group"
#   node_role_arn = aws_iam_role.eks_node_group_role.arn
#   subnet_ids = [aws_subnet.public_subnet.id]

#     scaling_config {
#       desired_size = 1
#       max_size = 2
#       min_size = 0
#     }

#     instance_types = ["t2.medium"]

#     depends_on = [ 
#         aws_iam_role_policy_attachment.eks-AmazonEKSWorkerNodePolicy,
#         aws_iam_role_policy_attachment.eks-AmazonEC2ContainerRegistryReadOnly,
#         aws_iam_role_policy_attachment.eks-CNIPolicy
#     ]

#     # associate private node group with security group      -> search for why?
#     remote_access {
#       ec2_ssh_key = aws_key_pair.tf_key.key_name
#       source_security_group_ids = [aws_security_group.private_sg.id]
#     }   

    
# }



//****************************************************************************************************************8

# public node group

resource "aws_eks_node_group" "saay_public_node_group" {
  cluster_name = aws_eks_cluster.saayeks.name
  node_group_name = "saay_public_node_group"
  node_role_arn = "arn:aws:iam::277707121935:role/eks_node_group_role"
  subnet_ids = [aws_subnet.public_subnet.id]


    scaling_config {
      desired_size = 1
      max_size = 2
      min_size = 0
    }

    instance_types = ["t2.medium"]

    depends_on = [ 
        aws_iam_role_policy_attachment.eks-AmazonEKSWorkerNodePolicy 
        ]


    # associate private node group with security group      -> search for why?
    remote_access {
      ec2_ssh_key = aws_key_pair.tf_key.key_name
      source_security_group_ids = [aws_security_group.eks_node_group_sg.id]
    }    
}

resource "aws_security_group" "eks_node_group_sg" {
    vpc_id = aws_vpc.my_vpc.id

    ingress {
        from_port   = 80
        to_port     = 80
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]  # Allow HTTP traffic
    }

    ingress {
        from_port   = 3000
        to_port     = 3000
        protocol    = "tcp"
        security_groups = [aws_security_group.bastion_sg.id]  # Allow access from bastion security group
    }

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]  # Allow all outbound traffic
    }

    tags = {
        Name = "eks_node_group_sg"
    }
}









//***************************************************************************


//permissions of both node_groups
resource "aws_iam_role" "eks_node_group_role" {
  name = "eks_node_group_role"
  assume_role_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [{
        "Action": "sts:AssumeRole",
        "Effect": "Allow",
        "Principal": {
            "Service" : "ec2.amazonaws.com"
        }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "eks-AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.eks_node_group_role.name
}

resource "aws_iam_role_policy_attachment" "eks-AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.eks_node_group_role.name
}

resource "aws_iam_role_policy_attachment" "eks-CNIPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.eks_node_group_role.name
}