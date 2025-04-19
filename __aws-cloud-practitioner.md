
//-------------------------------------------------------//

# Mock Tests

69% , 3H , 2025.03.26

70% , 2H20 , 2025.03.26

78% , 2025.03.26

66% , 2H , 2025.03.27

75% , 2H , 2025.03.27

70% , 50min , 2025.03.28

//-------------------------------------------------------//

# Docs 

blog - https://aws.amazon.com/blogs/
blog - https://aws.amazon.com/blogs/aws/

forum - https://repost.aws/
forum - https://community.aws/
forum - https://stackoverflow.com/collectives/aws

https://aws.amazon.com/whitepapers/

AWS Solutions Library - https://aws.amazon.com/solutions/

AWS IQ - AWS Gig Economy https://iq.aws.amazon.com/

AWS S3 - https://aws.amazon.com/s3/

Exam - https://www.aws.training/

//-------------------------------------------------------//

# HowTos

How to Install and Configure AWS Command Line Interface (CLI)
https://www.youtube.com/watch?v=BzzCIsjrE7U

Deploying a React App on AWS S3 
https://www.youtube.com/watch?v=SHN48wTEQ5I

Debugging AWS Lambda and API Gateway (In-Depth Guide) - Part 3 of my Debugging Series 
https://www.youtube.com/watch?v=y3ZfoCZ_yzg

//-------------------------------------------------------//

# Udemy

Test Blank 0
https://www.udemy.com/course/aws-certified-cloud-practitioner-new/learn/quiz/4912078/test#questions


//-------------------------------------------------------//

# Pending

Diff between Fully Managed and Serverless ?

What's the deal w Microservices ?

VPC vs AZ ? Which one superseed the other?

VPC vs Region ? Which one superseed the other?

EFS vs AZ ? Which one superseed the other?
EC2s can access files on an EFS file system across many AZ, Regions and VPCs.
EFS is a regional service storing data within and across multiple AZs for high availability and durability.

EFS vs Region ? Which one superseed the other?


//-------------------------------------------------------//

# Jargon

provision resources = plan and acquire resources
Nodes = Instances
Regions = For Applications and Infra
AZ = Availability Zones, made of multiple data centers
IaaS = Infrastructure As A Service
EC2 = Elastic Compute Cloud
IAM = Identity and Access Management
RI = Reserved Instances (EC2 Reserved Instances)
AMI = Amazon Machine Image (OS)
EBS = Elastic Block Storage
EFS = Elastic File System
NFS = Network File System
EFS IA = EFS Infrequent Access
HPC = High Performance Computing
ELB = Elastic Load Balancer
APL = Application Load Balancer
NLB = Network Load Balancer
GWLB = Gateway Load Balancer
ASG = Auto Scaling Group
ACL = Access Control List
EMR = Elastic MapReduce
Serverless = no infra to manage
OLTP = Online transactional processing
OLTP workload = balance of read and write
OLAP = On-Line Analytical Processing
OLAP workload = read-intensive
CDK = Cloud Development Kit
PaaS = Platform as a Service
Provisioning = process of creating and setting up IT infrastructure, and includes the steps required to manage user and system access to various resources
SSM = AWS System Manager
DR = Disaster Recovery
CDN = Content Delivery Network
OAC = CloudFront Origin Access Control
SNS = Simple Notification Service (Amazon SNS)
SQS = Simple Queue Service (Amazon SQS)
VPC = Virtual Private Cloud
ASR = Automatic Speach Recognition
AWS STS = Security Token Services
FIS = Fault Injection Simulator
CAF = Cloud Adoption Framework
AMS = AWS Managed Services
DNS = Domain Name System
CMK = Customer Managed Key
NACL = Network Access Control List (Network ACL)
ECR = Elastic Container Registery
DRT = DDoS response team
RTO = recovery time objective
RPO = recovery point objective
PCI = Payment Card Industry


//-------------------------------------------------------//

# IAM

IAM = Identity and Access Management

Global Service

Mostly written as JSON, mandatory elements of an IAM policy
 - Effect: Allow/Deny
 - Action: list of actions

Identity-based policies: permissions boundaries attached to a user or role.

Resource-based policies: attached to a resource.



//-------------------------------------------------------//

# IAM Permissions

Users and Groups can be assigned JSON documents called policies.

Good Practices: 
- Least privilege principle
- Never use root access, only for initial aws account setup
- Never share IAM users nor IAM Access Keys
- One physical user = One aws user
- Assign users to groups, and assign permissions to groups
- Create strong password policy
- Enforce MFA
- Use Access Keys for programmatic access
- Audit permissions with IAM Credentials Report and IAM Last Access

//-------------------------------------------------------//

# AWS Regions

Physical location.

Has minimum THREE isolated, and physically separated Availability Zones (AZ).

//-------------------------------------------------------//

# AZ = Availability Zone

Each AZ consists of ONE or more discrete data centers.

Group of logical data centers.

Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks.

AZs in a same AWS Region are interconnected with high-bandwidth and low-latency networking.

//-------------------------------------------------------//

# AWS Local Zones

Use Case: end-users for low-latency requirements

Very low latency access to the apps running locally

For select AWS services, like compute and storage services, closer to more end-users, 

AWS Local Zones are also connected to the parent region via Amazon’s redundant and very high bandwidth private network.

Giving apps running in AWS Local Zones fast, secure, and seamless access to the rest of AWS services.

//-------------------------------------------------------//

# IAM Policies

JSON documents to define Users, Groups or Roles' permissions

//-------------------------------------------------------//

# IAM Principal

In the context of IAM policies, a principal represents the entity that is allowed or denied access to AWS resources.

It can be an IAM user, an IAM role, an AWS service, or even an anonymous user (in certain cases)

//-------------------------------------------------------//

# EC2

EC2 = Elastic Compute Cloud = Infrastructure As A Service

EC2 Instance = Virtual Server

Supports RESERVATION to optimize costs.

User data is the data that you specified in the form of a BOOTSTRAP SCRIPT or configuration parameters while launching your instance.

//-------------------------------------------------------//

# EC2 Instance Types

General Purpose
 —> for diversity of workload, i.e. web servers and code repos
 —> i.e. t2.micro

Compute Optimized
 —> compute-intensive tasks that require high performance processors
 —> i.e. batch processing workload, media transcoding, high perf web servers, high perf computing

Memory Optimized
 —> workloads that process large data sets in memory
 —> i.e. high perf databases, distributed web cache store, in-memory dbs for BI, real-time processing of big unstructured data

Storage Optimized
 —> storage-intensive tasks that require high, sequential read and write access to large data sets on local storage
 —> i.e. High frequency online transaction processing (OLTP) systems, Relational & NoSQL databases, 
Cache for in-memory databases (for example, Redis), Data warehousing applications, Distributed file systems

https://instances.vantage.sh/

//-------------------------------------------------------//

# Security Groups

Firewalls around instances

They regulate:
• Access to Ports
• Authorised IP ranges - IPv4 and IPv6
• Control of inbound network (from other to the instance)
• Control of outbound network (from the instance to other)

A Security Group can have allow rules only — it CANNOT have deny rules

//-------------------------------------------------------//

# Classic Ports to know

• 22 = SSH (Secure Shell) - log into a Linux instance
• 21 = FTP (File Transfer Protocol) - upload files into a file share
• 22 = SFTP (Secure File Transfer Protocol) - upload files using SSH
• 80 = HTTP - access unsecured websites
• 443 = HTTPS - access secured websites
• 3389 = RDP (Remote Desktop Protocol) - log into a Windows instance

//-------------------------------------------------------//

# EC2 Instances Purchasing Options

On-Demand Instances - short workload, predictable pricing, pay by second

Reserved (1 & 3 years)
—> Reserved Instances - long workloads
—> Convertible Reserved Instances - long workloads with flexible instances

Savings Plans (1 & 3 years) - commitment to an amount of usage, long workload

Spot Instances — short workloads, cheap, can lose instances (less reliable)

Dedicated Hosts - book an entire physical server, control instance placement

Dedicated Instances - no other customers will share your hardware

Capacity Reservations — reserve capacity in a specific AZ for any duration

//-------------------------------------------------------//

# EC2 On Demand

Pay for what you use:
 - Linux or Windows - billing per second, after the first minute
 - All other operating systems - billing per hour

Highest cost but no upfront payment

No long-term commitment
Recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave

//-------------------------------------------------------//

# EC2 Reserved Instances

Huge Discount Compared to On-demand: Up to 72% discount

Book for fixed/specific instance attributes (Instance Type, Region, Tenancy, OS)
 - Period - 1 year (+discount) or 3 years (+++discount)
 - Scope - Regional or Zonal (reserve capacity in an AZ)
 - Payment Options No Upfront (+), Partial Upfront (++), All Upfront (+++)

Recommended for steady-state usage applications (think database)
You can buy and sell in the Reserved Instance Marketplace

— EC2 Convertible Reserved Instance —

Lower But Still Huge Discount: Up to 66% discount

Can change the EC2 instance type, instance family, OS, scope and tenancy

//-------------------------------------------------------//

# EC2 Savings Plans

Huge Discount Compared to On-demand: Up to 72% discount

COMMIT minimum usage ($10/hour for or 3 years) — beyond it's billed at On-Demand price

LOCKED instance family and region (e.g. M5 in us-east-1)

FLEXIBLE instance Size (e.g., m5.xlarge, m5.2xlarge), OS, Tenancy (Host, Dedicated, Default)

//-------------------------------------------------------//

# EC2 Spot Instances

USECASE: workloads that are resilient to failure
Batch jobs, Data analysis, Image processing, Any distributed workloads, Workloads with a flexible start and end time


HUGE DISCOUNT compared to On-demand: Up to 90% discount
BEST PRICE for AWS instances

FIX your max price.
LOSE the instanace if current spot price goes above your max price.


NOT SUITABLE for critical jobs or databases

//-------------------------------------------------------//

# EC2 Dedicated Hosts

PRICE: the most expensive option

PHYSICAL SERVER with EC2 instance capacity fully dedicated to YOU
 —> you get access the hardware itself

USECASES: 
 - for strong regulatory or compliance requirements
 - use existing server-bound software licenses (per-socket, per-core, pe VM software licenses)
 - run software that have complicated licensing model (BYOL- Bring Your Own License)

Purchasing Options
 - On-demand: pay per second for active Dedicated Host
 - Reserved: 1 or 3 years (No Upfront, Partial Upfront, All Upfront)

//-------------------------------------------------------//

# EC2 Dedicated Instances

Dedicated to a SINGLE CUSTOMER

Instance running in a virtual private cloud (VPC) on hardware dedicated to a single customer.

No control over instance placement (can move hardware after Stop / Start)

You CANNOT use Dedicated Instances for using server-bound software licenses.

//-------------------------------------------------------//

# EC2 Capacity Reservations

Reserve On-Demand instances capacity in a specific AZ for any duration

You always have access to EC2 capacity when you need it

No time commitment (create/cancel anytime), no billing discounts
Combine with Regional Reserved Instances and Savings Plans to benefit
from billing discounts

You're charged at On-Demand rate whether you run instances or not
Suitable for short-term, uninterrupted workloads that needs to be in a
specific AZ

//-------------------------------------------------------//

# AWS charges for IPv4 addresses

Public IPv4: $3.6 per month ($0.005/hour)

FREE TIER for the EC2 service, for new AWS accounts: 750 hours of Public IPV4 per month for the first 12 months

For all other services there is no free tier

//-------------------------------------------------------//

# EC2 Shared Responsibility Model

AWS 
 - Infrastructure (global network security)
 - Isolation on physical hosts
 - Replacing faulty hardware
 - Compliance validation
 - Physical and Environmental controls

YOU
 - Security Groups rules
 - Operating-system patches and updates
 - Software and utilities installed on the EC2 instance
 - IAM Roles assigned to EC2 & IAM user access management
 - Data security on your instance

//-------------------------------------------------------//

# EBS Elastic Block Storage

Attached to one single instance
Mapped/Tied to one single AZ
Can use EBS Snapshot for backup or transferring EBS volumes across AZ

EBS aka EBS Volume

Various volume types optimized for different workloads
i.e. SSD — for transactional workloads
i.e. HDD — for throughput-intensive workloads

NOT encrypted by default

//-------------------------------------------------------//

# EBS Snapshot

A backup of your EBS Volume at a point in time.

EBS Snapshots are stored incrementally, you are billed only for the changed blocks stored (NOT for the amount of space your data consumes).

//-------------------------------------------------------//

# AMI = EC2 AMI = Amazon Machine Image

Customization of an EC2 instance

Create ready-to-use EC2 instances with our customization

You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. 
The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance.

//-------------------------------------------------------//

# EC2 Image Builder

Automate creation of Virtual Machines or container images

Automatically Create, Test and Deploy EC2 AMIs

Creation, Maintenance, Validation, Sharing, and Deployment

For Linux or Windows images for use on AWS and on-premises

//-------------------------------------------------------//

# EC2 Instance Store

TLDR: EBS on steroid

Better IO perf than EBS

Trade off: EPHEMERAL storage, lost if stopped 

USE CASES: cache, buffer, scratch data, temporary content

RISK: lost data if hardware fails

BACKUPS and REPLICATION: your responsibility

//-------------------------------------------------------//

# EBS vs Instance Store

EBS = not shared by instances + data persists even after instance termination

Instance Store =  not shared by instances + better IO perf + data lost if EC2 instance is stopped or terminated, or when the underlying disk drive fails

//-------------------------------------------------------//

# EFS = Elastic File System

EFS is a Managed NFS (Network File System) that can be mounted on 1000s of EC2s at a time.

Can be mounted on instances across multiple Availability Zones (AZ)

NOT encrypted by default

HIGH AVAILABILITY by default
 — across how many AZs ?

//-------------------------------------------------------//

# EFS vs EBS

EBS = not shared by instances + data persists even after instance termination

EFS = shared by many instances (shared files system) + data does NOT persist after instance termination

Both NOT encrypted by default

//-------------------------------------------------------//

# EFS IA = EFS Infrequent Access

DISCOUNT of 92% compared to EFS Standard

OPTIMIZED for files rarely accessed

LIFECYCLE POLICY is used to enable EFS IA
i.e. move files to EFS IA if files not accessed for 60 days

BILLING: pay a fee each time you read from or write data stored

DOES NOT sacrifice the high availability, high durability, elasticity, and POSIX file system access.

USE CASES: access for audit requirements, perform historical analysis, or perform backup and recovery

//-------------------------------------------------------//

# Amazon FSx

THIRD PARTY high-performance file system on AWS

- Amazon FSx for Windows File Server
- Amazon FSx for Lustre

//-------------------------------------------------------//

# Amazon FSx for Lustre

Scalable file storage for HPC (High Performance Computing)

Lustre = Linux + Cluster

USE CASES: Machine Learning, Video Processing, Financial Modeling...

SCALES up to 100s GB/s, millions of IOPS, sub-ms latencies

//-------------------------------------------------------//

# Amazon FSx for Windows File Server

For business applications

Fully managed, highly reliable, and scalable file storage

Accessible over the industry-standard Service Message Block (SMB) protocol. 

Built on Windows Server

Wide range of administrative features such as user quotas, end-user file restore, and Microsoft Active Directory (AD) integration.

//-------------------------------------------------------//

# Scalability and High Availability

Scalability = application/system ability to adapt to handle greater loads

Vertical Scalability = increase in instance size = SCALE UP / DOWN

Horizontal Scalability = Elasticity = increase in instance number = SCALE IN / OUT

//-------------------------------------------------------//

# High Availability

Goes hand-in-hand with Horizontal Scalability (Elasticity)

Applications run at least in two AZs to survive a data center loss.
Multi-AZ deployment is an example of High Availability.

Supporting High Availability by default:
 - DynamoDB
 - EFS
 
//-------------------------------------------------------//

# ELB = Elastic Load Balancer

Managed Load Balancer, AWS:
- garantees it will be working
- takes care of upgrades, maintenance, high availability, fault tolerance
- provides config knobs

You could setup your own to save on total cost but it will be more work (so cost time and resources)

Types of Load Balancer:
1. APL = Application Load Balancer
2. NLB = Network Load Balancer
3. GWLB = Gateway Load Balancer

//-------------------------------------------------------//

# APL = Application Load Balancer

a. HTTP/HTTPS/gRPC protocols (Layer 7)
b. Feature: HTTP Routing
c. Use Case: Static DNS (URL)

//-------------------------------------------------------//

# NLB = Network Load Balancer

a. TCP/UDP Protocols (Layer 4)
b. Feature: High Performance: millions of requests per second
c. Use Case: Static IP through Elastic IP

//-------------------------------------------------------//

# GWLB = Gateway Load Balancer

a. GENEVE Protocol (Layer 3)
b. Feature: Route Traffic to Firewalls that you manage on EC2 Instances
c. Use Case: Intrusion detection

//-------------------------------------------------------//

# ASG = Auto Scaling Group

COMPUTE is scaled 

SAVINGS: only run the at optimal capacity

Goals:
- Spread load across instances
- Replace unhealthy instances / Handles failures of instances
- Scale out (add nodes) to match an increased load
- Scale in (remove nodes) to match a decreased load
- Make sure we have a min and max number of machines running
- Automatically register new instances to a load balancer

//-------------------------------------------------------//

# Auto Scaling Strategies

- Manual Scaling
- Predictive Scaling
- Dynamic Scaling : Simple/Step Scaling, Target Tracking Scaling, Scheduled Scaling

Auto Scaling in EC2 and DynamoDB are examples of horizontal scaling.

//-------------------------------------------------------//

# Amazon S3

Stores data in a flat non-hierarchical structure.
No concept of directories and subdirectories.

key value based object storage service

Keys are the full path.
Keys are just very long names that contain slashes ("/")

Max Object Size: 5 TB

If uploading more than 5 GB, must use multi-part upload

Encrypted by default

Cost-Optimization

 - Offers Lifecycle configuration for cost-optimal storage

 - Does NOT support reservation to optimize costs.

https://aws.amazon.com/s3/

//-------------------------------------------------------//

# Amazon S3 - Security

User Based: IAM Policies, which API calls are allowed for specific IAM user

Resource Based:
- Bucket Policies — wide rules from the S3 console — allows cross account
- Object Access Control List (ACL) — finer grained
- Bucket Access Control List (ACL) — even finer grain?

Buckets???

//-------------------------------------------------------//

# S3 Block Public Access

By default, new buckets, access points, and objects don't allow public access.

However, users can modify bucket policies, access point policies, or object permissions to allow public access.

S3 Block Public Access settings override these policies and permissions so that you can limit public access to these resources.

— static website on Amazon S3 —

Configure an Amazon S3 bucket for website hosting and then upload your website content to the bucket. 

You must enable website hosting, set permissions, and create and add an index document.

//-------------------------------------------------------//

# Amazon S3 Versioning

Means of keeping multiple variants of an object in the same bucket.

Preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. 

//-------------------------------------------------------//

[...]

//-------------------------------------------------------//
//-------------------------------------------------------//

# Amazon RDS = Relational Database Service

SQL MANAGED service

Makes it easy to set up, operate, and scale a relational database in the cloud. 

For OLTP workloads

OLTP = Online transactional processing
OLTP workload = balance of read and write

AVAILABILITY: RDS Multi-AZ deployments’ main purpose (better failovers / disaster recovery) is high availability.

SCALABILITY: RDS Read replicas’ main purpose (better perf) is scalability — can also be used for failovers / disaster recovery.

You can use both read replicas and multi-AZ deployment for failovers / disaster recovery.

Multi-Region deployments’ main purpose is disaster recovery and local performance.

Selection of instance types optimized to fit different relational database use cases, varying combinations:
 - CPU
 - memory
 - storage
 - networking capacity

Performance of Amazon RDS instance is better than a customer-managed database instance.

NOT encrypted by default

Supports RESERVATION to optimize costs.

//-------------------------------------------------------//

# Amazon Aurora

MySQL and PostgreSQL-compatible relational database 

Performance and availability of traditional enterprise DB combined with the simplicity and cost-effectiveness of open source databases.

Proprietary technology from AWS.

MANAGED fully.

//-------------------------------------------------------//

# Amazon ElastiCache

MANAGED by AWS: OS maintenance/patching, optimizations, setup, configuration, monitoring, failure recovery and backups

IN-MEMORY DATABASES with high-performance, low latency

READ INTENSIVE work loads

Usually for Redis or Memcached protocol-compliant server nodes

//-------------------------------------------------------//

# DynamoDB

NOSQL Database

MANAGED by AWS

HIGHLY AVAILABLE by default — across 3 AZ.

MASSIVE WORK LOADS, distributed serverless database

MILLIONS OF REQUEST / SECONDS, trillions of rows, 100s of TB storage

Single digit ms latency

Supports RESERVATION to optimize costs.

//-------------------------------------------------------//

# DynamoDB VS RDS

Amazon RDS is less operationally efficient than Amazon DynamoDB while building a highly scalable solution.

//-------------------------------------------------------//

# DAX = DynamoDB Accelerator

IN-MEMORY CACHE for DynamoDB

10X PERF IMPROVEMENT: microseconds latency

//-------------------------------------------------------//

# DAX vs ElastiCache

DAX: DynamoDB only

ElastiCache: For other databases

//-------------------------------------------------------//

# DynamoDB Global Tables

Active-Active Replication = read/write on table replicated across 2 regions

//-------------------------------------------------------//

# Redshift

POSTGRESQL for OLAP: analytics and data warehousing

OLAP = On-Line Analytical Processing
OLAP workload = read-intensive

NOT FOR OLTP

LOAD DATA EVERY HOUR - vs every second

COLUMNAR storage data

SCALES TO PBs of data

BI TOOLS integrate with it such as Tableau or AWS Quicksight

//-------------------------------------------------------//

# Amazon EMR: Elastic MapReduce

Helps creating Hadoop clusters (Big Data) to analyze and process vast amount of data

Takes care of all the provisioning and configuration

Auto scaling and integrated with Spot instances

Clusters can be made of 100s of EC2 instances

USE CASES: ML, data processing, web indexing...

Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Hadoop, Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto. Amazon EMR can be used to provision resources to run big data workloads on Hadoop clusters.

//-------------------------------------------------------//

# Amazon Athena

ANALYTICS on Amazon S3

Uses SQL

SEVERLESS QUERY SERVICE

SEVERLESS = no infra to manage

//-------------------------------------------------------//

# Amazon Quicksight

DASHBOARD to visualize your data

BI tool

//-------------------------------------------------------//

# DocumentDB

AWS implementation of MongoDB, it's a NoSQL DB

MANAGED by AWS

HIGHLY AVAILABLE across 3 AZ

Does NOT support reservation to optimize costs.

//-------------------------------------------------------//

# Neptune

Graph DB

For apps w highly connected datasets

USE CASE: social media app, knowledge graphs (wikipedia), recommendation engines

//-------------------------------------------------------//

# Amazon Timestream

TIME SERIES DB

Over 1000x faster and 10x cheaper than relational databases

//-------------------------------------------------------//

# Amazon QLDB = Quantum Ledger DB

FINANCIAL TX

MANAGED by AWS

HIGHLY AVAILABLE across 3 AZ

IMMUTABLE

//-------------------------------------------------------//

# AWS Glue

MANAGED ETL service

ETL = Extract Transform Load

//-------------------------------------------------------//

# AWS Glue Data Catalog

Central repository to store structural and operational metadata for data assets in AWS Glue.

For a given data set, you can store its table definition, physical location, add business relevant attributes, as well as track how this data has changed over time.

//-------------------------------------------------------//

# DMS = Data Migration Service

MIGRATE DBs to AWS quickly and securely 

//-------------------------------------------------------//
//-------------------------------------------------------//

# Docker

Software Development Platform to deploy apps.

Apps are packaged in containers that can be run on any OS.

Docker images are stored in Docker Repositories

 - PUBLIC: on Docker Hub

 - PRIVATE: Amazon ECR (Elastic Container Registery)

//-------------------------------------------------------//

# ECR = Elastic Container Registery

Docker Registery.

Store, manage, and deploy Docker container images.

Eliminates the need to operate your container repositories.

Does NOT support running container applications

//-------------------------------------------------------//

# Docker vs VMs

Docker is "sort of" a virtualization tech

Resources are shared with the host

Docker are more lightweight than VMs

Docker do not come with an OS — VMs do

//-------------------------------------------------------//

# ECS = Elastic Container Service

LAUNCH Docker Containers on AWS

YOU must provision and maintain the infra (launch EC2 instances)

INTEGRATED with ALB (Application Load Balancer)

highly scalable, fast, container management service
easy to run, stop, and manage Docker containers on a cluster
NOT a fully managed service
You can manage the underlying servers yourself.

//-------------------------------------------------------//

# Fargate

LAUNCH Docker Containers on AWS

MANAGED by AWS - no need to provision and maintain the infra - SERVERLESS offering

Works with both Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Kubernetes Service (Amazon EKS).

With AWS Fargate, you do NOT have access to the underlying servers.

//-------------------------------------------------------//

# Fargate vs ECS

Managed vs Not Managed

//-------------------------------------------------------//

# ECR = Elastic Container Registery

PRIVATE Docker Registery on AWS

STORE your docker images to be run by Farget or ECS


//-------------------------------------------------------//

# Kubernetes

Manage, deploy, and scaling of containerized apps (Docker)

Cloud Agnostic - AWS, GCP, Azure

Open Source

//-------------------------------------------------------//

# EKS = Elastic Kubernetes Service

LAUNCH MANAGED Kubernetes Clusters on AWS

Why? Coz launching Kubernetes is quite hard, makes it easy

EKS Nodes = EC2 Instances

EKS Pods = 

//-------------------------------------------------------//

# Serverless

Serverless = no infra to manage, no server to manage

AWS Lambda was the pioneer for Serverless.

AWS Lambda now includes "anything that's managed" such as databases, messaging, storage

Does NOT support reservation to optimize costs.

//-------------------------------------------------------//

# Serverless by AWS

 - Amazon S3 : storage
 - DynamoDB : database
 - Fargate : Docker Containers
 - Lambda : run functions

//-------------------------------------------------------//

# Lambda vs EC2

EC2 Instance 
 - Virtual Server
 - Scaling means work - this is NOT a managed service
 - Limited by RAM and CPU
 - Continuously Running
 
Lambda
 - Virtual Functions - No Server To Manage
 - "Unlimited" and automated scaling
 - Runs on-demand

//-------------------------------------------------------//

# Lambda — Lambda Functions

REACT DRIVEN service - function invoked only when needed

INTEGRATED with the AWS suite of services

FREE TIER: 1M requests and 400,000 GBs compute time

PAY per request and compute time - Pay per calls and duration

MANY LANGUAGES supported / integrated 

EASY MONITORING with Amazon CouldWatch

EASY SCALING to get more resources per function (up to 10GB RAM)

Pending: Memory size can be configured?

//-------------------------------------------------------//

# Lambda Use Cases

THUMBNAIL creation: new image in S3 triggers AWS Lambda Function creating thumbnail in S3 and metadata in DynamoDB

CRON Job: CloudWatch Event triggers Lambda Function

//-------------------------------------------------------//

# Amazon API Gateway

SERVERLESS

MANAGED by AWS

Create, Publish, Maintain, Monitor, Secure APIs

RESTful and WebSocket APIs

Use Case: Build a severless API

//-------------------------------------------------------//

# AWS Batch

MANAGED

Will dynamically launch EC2 or Spot Instances - and provision the needed amount of CPU / RAM

Scales to 100,000s of Batch Jobs

Batch Jobs defined as Docker images and run on ECS

//-------------------------------------------------------//

# Batch vs Lambda

Lambda
 - Time Limit
 - Runtimes Limited 
 - Temp Diskspace Limited
 - Serverless

Batch
 - No Time Limit
 - Any Runtime - packaged as Docker Image
 - Relies on EBS and EC2

//-------------------------------------------------------//
//-------------------------------------------------------//

# CloudFormation

Infra As Code

DECLARATIVE way to outline your AWS infra — CloudFormation then creates them for you, in the right order

Model and provision, in an automated and secure manner, all the resources needed for your apps across all Regions and accounts.
Do it using programming languages or a simple text file.

A stack is a collection of AWS resources that you can manage as a single unit. In other words, you can create, update, or delete a collection of resources by creating, updating, or deleting stacks.

COST ESTIMATE for stack with CloudFormation Template

COST MONITORING for each resource used in the stack

COST CUTTING by deleting templates at a given time, and recreation at another time

DESTROY N CREATE infra on the fly

DIAGRAMS created automatically for templates

REUSE existing templates - shared publicly on the web

WIDE SUPPORT of AWS resources

CloudFormation StackSets extends the functionality of stacks by enabling you to create, update, or delete stacks across multiple accounts and regions with a single operation

//-------------------------------------------------------//

# AWS CDK : Cloud Development Kit

Infra As Code

FAMILIAR language to define your infra such as JavaScript, Python, Java and .NET

Code then COMPILED to CloudFormation Template - JSON or YAML

INFRA+APP deployed together

Use Case: Lambda Functions, Docker Containers

//-------------------------------------------------------//

# Elastic Beanstalk

MANAGED

PaaS = Platform as a Service

Makes it even easier for developers to quickly deploy and manage applications in the AWS Cloud

Automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring

DEVELOPER CENTRIC view for deploying an app on AWS

Dev still has access to the underlying operating system for further enhancements

ALL-IN-ONE VIEW

FULL CONTROL over the config

Supports for many platforms: Go, Java, NodeJS, Python, PHP, Docker Container

HEALTH MONITORING in CloudWatch

//-------------------------------------------------------//

# AWS CodeBuild

MANAGED

Code Building service in the cloud.

COMPILES, RUNS TESTS, CREATES PACKAGES

//-------------------------------------------------------//

# AWS CodePipeline

ORCHESTRATE the steps to push code to prod
 —> Code, Build, Test, Provision, Deploy
 —> Basis for CICD

MANAGED

COMPATIBLE with CodeCommit, CodeBuild, CodeDeploy, Elastic Beanstalk, CloudFormation, Github...

//-------------------------------------------------------//

# AWS CodeDeploy

Automates code deployments

Cloud (EC2s) and on-premises instances.

Easily deploy to one instance or thousands.

//-------------------------------------------------------//

# AWS CodeArtifact

ARTIFACT MANAGEMENT scalable, secure, and cost-effective

INTEGRATED w Maven, Gradle, npm, yarn, twine, pip

Artifact Management TLDR

 - Code Packages, aka Code Dependencies, depend on each other to be built.
 
 - Storing and Retrieving these dependencies is called artifact management.

//-------------------------------------------------------//

# SSM = AWS System Manager

COMPATIBLE w Linux, Windows, MacOS, Raspberry Pi

HYBRID helps manage EC2 and on-premise systems at scale

INSTALLED by default on Linux AMI - SSM Agent is...

Features

 - Run commands on FLEETS of servers.

 - Patching Automation for enhanced compliance.

 - Store Parameter Config - with SSM Param Store.

//-------------------------------------------------------//

# SSM Session Manager

SECURE SHELL on your EC2 and On-Premise servers.

WITHOUT requiring SSH Access, bastion hosts, or SSH keys.

WITHOUT port 22 needed.

SUPPORT Linux, macOS, Windows.

SESSION LOG sent to S3 or CloudWatch

//-------------------------------------------------------//

# Systems Manager Parameter Store

STORE config and secrets i.e. passwords, api keys, ami configs

CONTROL access w IAM

VERSIONING

ENCRYPTION

//-------------------------------------------------------//
//-------------------------------------------------------//

# Global Apps

Regions = For Applications and Infra

AZ = Availability Zones, made of multiple data centers

Edge Locations = Points Of Presence = for content delivery as close as possible to users

//-------------------------------------------------------//

# Amazon Route 53

MANAGED DNS

DNS : collection of rules and records helping clients to reach servers via URLs

Highly available and scalable

Common Records

 - Map URL to IPv4 address => A record 
 
 - Map URL to IPV6 address => AAAA record
 
 - Map hostname to hostname => CNAME
 
 - Map hostname to AWS resource => Alias

Routing policy

 - Latency-based routing: improve performance by routing the requests to the AWS endpoint that provides the fastest experience
 
 - Failover routing: active-passive configuration. 

 - simple routing: route traffic to a single resource, i.e. to website
 
//-------------------------------------------------------//

# AWS CloudFront

CDN = Content Delivery Network

EDGE LOCATIONS in 216 points globally

READ PERF improved, content cached at the edge

DDoS protection

OAC = CloudFront Origin Access Control

//-------------------------------------------------------//

[...]

//-------------------------------------------------------//

# CloudWatch Logs

Aggregates logs from different AWS services: 
- EC2s, AWS CloudTrail, Route 53, and other sources such as on-premises servers
- both cloud and on-premises servers

Can trigger alarms

For DevOps engineers, developers, site reliability engineers (SREs), and IT managers

Data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and unified view of operational health

//-------------------------------------------------------//

# Amazon EventBrdige - frmly CloudWatch Events

CRON Jobs - that trigger actions

REACT to a service - that trigger actions

ACTIONS can be Lambda Functions, send SQS/SNS messages

//-------------------------------------------------------//

# Amazon CloudTrail

GOVERNANCE, COMPLIANCE, AUDIT

ENABLED by default

HISTORY of all events/ApiCalls made in your AWS account

ALL REGIONS by default, can be set per region

ENCRYPTED by default

//-------------------------------------------------------//

# CloudWatch VS CloudTrail

CloudWatch MUCH BIGGER than ClouTrail = CloudTrail + EC2s logs + Route 53 log + on-premises servers logs

CloudTrail = audit & compliance logs only

CloudWatch = for DevOps engineers, developers, site reliability engineers (SREs), and IT managers

//-------------------------------------------------------//

[...]

//-------------------------------------------------------//

# VPC = Virtual Private Cloud

Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined.

Key Concepts for VPCs:

 - Virtual private cloud (VPC) — A virtual network dedicated to your AWS account.

 - Subnet — A range of IP addresses in your VPC.

 - Route table — A set of rules, called routes, that are used to determine where network traffic is directed.

 - Internet Gateway — A gateway that you attach to your VPC to enable communication between resources in your VPC and the internet.

 - VPC endpoint — Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.

VPC Use Case: a logically isolated section of AWS, where to launch AWS resources

VPC : Spans all of the Availability Zones (AZ) in the Region

— Subnet —

Spans only one Availability Zone (AZ).

Network partition of the VPC

— Internet Gateway —

Provides internet access

VPC LEVEL

— NAT Gateway / Instances — 

Provides internet access

PRIVATE SUBNET LEVEL

— Network Access Control List (Network ACL) — 

Subnet level

Stateless — rules for inbound and outbound
Contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic

Acts as a firewall

Optional

To control inbound and outbound traffic

— Security Groups —

Virtual firewall 

Instance level

To control inbound and outbound traffic

Stateful : automatically allows the return traffic

[...]

— AWS Direct Connect —
cloud service solution 
Makes it easy to establish a dedicated private network connection from your PREMISES to AWS.
private virtual interface
on-premise network directly to your Amazon VPC, providing you with a private, 
high bandwidth network connection between your network and your VPC. 
Private connection: does not go over the public internet. 
It takes at least a month to establish this physical connection.


Internet Gateway : horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.

— VPC Gateway Endpoint —

Services supporting VPC Gateway Endpoint for a private connection from a VPC
 - S3
 - DynamoDB
 
Services NOT supporting VPC Gateway Endpoint for a private connection from a VPC
 - EC2
 - SNS
 - SQS
 
[...]

DDOS Protection

Combination of Shield, WAF, CloudFront, Route 53

[...]

PII = Personally Identifiable Information

AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources.

Penetration Testing, security assessments, is allowed without prior approval on 8 services. 
DDoS, port flooding and protocol flooding are examples of prohibited activities.

— AWS Artifact —

Your go-to for AWS compliance documentation and AWS agreements

— AWS Config —

Service that enables you to assess, audit, and evaluate the configurations of your AWS resources.

— AWS Certificate Manager —

Service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources. 

— Responsibilities —

AWS is responsible for:
 - patching and fixing flaws within the infrastructure
 
Customers are responsible for:
 -  patching their guest OS and applications
 
Shared Responsibility includes:
 - Configuration Management
 - Awareness and Training.

— AWS Security Hub —

Provides you with a comprehensive view of your security state within AWS and your compliance with security standards and best practices.

— AWS KMS —

Managed service.

Easily create and control the keys used for cryptographic operations.

— customer managed key (CMK) —

The KMS keys that you create are customer managed keys.

You have full control over these KMS keys.

i.e. establishing and maintaining their key policies, IAM policies, and grants, enabling and disabling them, rotating their cryptographic material, adding tags, creating aliases that refer to the KMS keys, and scheduling the KMS keys for deletion.

— Amazon Inspector —
Automated security assessment service.
Helps improve the security and compliance of applications deployed on AWS. 
Helps test the network accessibility of your EC2s and the security state of your apps running on the instances.

— Shield Standard —
Used to safeguard running applications from DDoS attacks.
FREE
Automatically activated for all AWS customers with no options for any customizations.
Therefore in AWS Shared Responsibility Model, it falls under the purview of AWS.

— Shield Advanced —

Higher levels of protection against attacks.

DDoS attack = spikes in your AWS bill, potentially.

Exclusive access to advanced, real-time metrics and reports for extensive visibility into attacks on your AWS resources.

DRT (DDoS response team).

Intelligent DDoS attack detection and mitigation for attacks on network layer (layer 3), transport layer (layer 4), and application layer (layer 7).
Expanded DDoS attack protection for web apps running on: 
 - Amazon Elastic Compute Cloud
 - Elastic Load Balancing (ELB)
 - Amazon CloudFront
 - Amazon Route 53
 - AWS Global Accelerator


— GuardDuty —

Threat detection service.
Continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads.

//-------------------------------------------------------//

[...]

//-------------------------------------------------------//

# Machine Learning

ASR = Automatic Speach Recognition

NLP = Natural Language Processing

Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find meaning and insights in text.

Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly. SageMaker removes the heavy lifting from each step of the machine learning process to make it easier to develop high quality models.

Amazon Kendra is a highly accurate and easy to use enterprise search service that’s powered by machine learning.
document search service powered by machine learning
fully managed

Amazon Transcribe is an AWS service that makes it easy for customers to convert speech-to-text. Amazon Polly is a service that turns text into lifelike speech.

Amazon Lex is a service for building conversational interfaces into any application using voice and text. Lex provides the advanced deep learning functionalities of automatic speech recognition (ASR) for converting speech to text, and natural language understanding (NLU) to recognize the intent of the text, to enable you to build applications with highly engaging user experiences and lifelike conversational interactions.

Amazon Rekognition makes it easy to add image and video analysis to your applications using proven, highly scalable, deep learning technology that requires no machine learning expertise to use.

Amazon Personalize is a machine learning service that makes it easy for developers to create individualized recommendations for customers using their applications.

Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation.

Amazon Forecast is a fully managed service that uses machine learning to deliver highly accurate forecasts. 

//-------------------------------------------------------//

# Account Mgmt, Billing, Support

OU = Organizational Unit

You can remove an account from your organization only if the account has the information that is required for it to operate as a standalone account.
For each account that you want to make standalone, you must :
  - accept the AWS Customer Agreement
  - choose a support plan
  - provide and verify the required contact information
  - provide a current payment method

SCP = Service Control Policy

SCP : to restrict account power/permissions

Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. An SCP spans all IAM users, groups, and roles, including the AWS account root user.

AWS RAM = AWS Resource Access Manager

AWS Pricing Calculator = https://calculator.aws/

Amazon S3 storage classes that do not charge any data retrieval fee
 - S3 Standard
 - S3 Intelligent-Tiering

AWS Pricing Calculator : web based service that you can use to create cost estimates to suit your AWS use cases. AWS Pricing Calculator is useful both for people who have never used AWS and for those who want to reorganize or expand their usage.
 
The AWS Simple Monthly Calculator is an easy-to-use online tool that enables you to estimate their architecture solution monthly cost of AWS services for your use case based on your expected usage. It is being replaced by AWS Pricing Calculator.

AWS Control Tower : to setup multiple accounts w best practices

AWS Control Tower offers the easiest way to set up and govern a new, secure, multi-account AWS environment. It establishes a landing zone that is based on best-practices blueprints, and enables governance using guardrails you can choose from a pre-packaged list.

Tags: assign metadata to your AWS resources in the form of tags. Tags can help you manage, identify, organize, search for, and filter resources.

CloudFormation : deploy stacks across accounts and regions

Trusted Advisor : insights, Support Plans adapted to ur needs

AWS Trusted Advisor : 
Real time guidance.
Helps provision resources including performance, security, and fault tolerance.
Helps too for cost optimization and service limits.
Follows AWS best practices, recommendations in 5 categories: 
 - Cost Optimization
 - Performance
 - Security
 - Fault Tolerance
 - Service Limits

AWS Service Catalog : allow users to create pre-defined stacks setup by admins

CloudWatch billing metric data : stored in which AWS Region "US East (N. Virginia) - us-east-1"

— Compute Optimizer —

Recommends resources configs to reduce cost, uses ML.
Recommends optimal AWS resources for your workloads to reduce costs and improve performance by using machine learning to analyze historical utilization metrics.
For
 - Elastic Block Store (Amazon EBS)
 - AWS Lambda functions
 - EC2 instances
 - EC2 Auto Scaling groups
NOT for
 - S3
 - EFS
 
— Service Quotas —

Notifications when close to threshold

— Cost Explorer —

Forecast usage up to 12 months based on the previous usage. Choose an optimal Savings Plan. Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time.

— Billing Alarms vs Budgets —

Budgets is more advanced, notifies PRIOR to reaching a threshold.

—  AWS Budgets —

Gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. Difference with CloudWatch Billing Alarms: CloudWatch Billing Alarms only send alerts when your costs and usage are exceeding your budget, not when it is forecasted to exceed your budget, while AWS Budgets does both.

— Cost Allocation Tags —

A Cost Allocation Tag : label that you or AWS assigns to an AWS resource. 

Each tag consists of a key and a value — key must be unique, and 1 key has only 1 value.

You must activate both AWS generated tags and user-defined tags separately before they can appear in Cost Explorer or on a cost allocation report.



— Plans —

1. Free Tier

2. Developer Support
   - testing or doing early development on AWS
   - does NOT offer 24x7 phone, email, and chat support
   - email-based technical support during business hours, general architectural guidance

3. Business Support
   - production workloads
   - 24x7 phone, email and chat support + technical support + architectural guidance + full access to AWS Trusted Advisor Best Practice Checks
   - access to guidance, configuration, and troubleshooting of AWS interoperability with third-party software
   
4. Enterprise Support
   - business-critical system
   - inc. everything from "Business Support" tier
   - response under 15 minutes and offers access to a Technical Account Manager, as well as a Concierge Support Team




CloudFront pricing is different across different geographic regions.

Compute Savings Plans provide the most flexibility and help to reduce your costs by up to 66% in exchange for a commitment to a consistent amount of usage for a 1 or 3 year term. These plans automatically apply to EC2 instance usage regardless of instance family, size, AZ, region, OS or tenancy, and also apply to Fargate or Lambda usage.



Reservations are available for EC2 Reserved Instances, DynamoDB Reserved Capacity, ElastiCache Reserved Nodes, RDS Reserved Instance, Redshift Reserved Nodes. Reservations allow you to minimize risks, predictably manage budgets and comply with long-term requirements.

Reserved Instances are good and more cost-effective (up to 69% discount compared to On-demand pricing, depending on the upfront) for long workloads. You can reserve instances for 1 or 3 years in RDS.

//-------------------------------------------------------//

— Advanced Identity —

AWS STS = Security Token Services : Temporary limited privileges credentials to access AWS resources


— Amazon Cognito —

ID for web app and mobile app users. Db of users. 

Quickly and easily add user sign-up, sign-in, and access control to your web and mobile apps.


— Directory Services —

Integrate w MS Active Directory in AWS

//-------------------------------------------------------//

# AWS IAM Identity Center - formerly AWS SSO

Choose to manage access just to your AWS accounts, just to your cloud applications, or to both.

Centrally manage access to multiple AWS accounts and business applications.

SSO access to AWS accounts and apps.

SSO for all your
 - AWS accounts
 - Biz cloud apps i.e. MS365, Salesforce
 - SAML2.0
 - EC2 Windows Instances

Identity Providers
 - AWS Built-In identity store in IAM Identity Center
 - 3rd Party i.e. ActiveDirectory (AD), OneLogin
 
IAM
 - For users your trust and belong to your company
 - Identity and Access Mgmt
Orgs
 - Make multiple accounts

Quickly and easily assign and manage your employees’ access to multiple AWS accounts, SAML-enabled cloud applications (such as Salesforce, Microsoft 365, and Box), and custom-built in-house applications, all from a central place.
 
//-------------------------------------------------------//

— Amazon Workspaces —

Virtual Desktops


— FIS = Fault Injection Simulator —

Chaos engineering


— AWS IoT Core —

AWS IoT Core lets you securely connect IoT devices to the AWS Cloud and other devices without the need to provision or manage servers.


— Amazon AppStream —

Amazon AppStream 2.0 is a fully managed non-persistent application and desktop streaming service that provides users instant access to their desktop applications from anywhere.


— AWS Device Farm —

AWS Device Farm is an application testing service that lets you improve the quality of your web and mobile apps by testing them across an extensive range of desktop browsers and real mobile devices; without having to provision and manage any testing infrastructure.


//-------------------------------------------------------//
//-------------------------------------------------------//

# Architecture Principles

1. Stop Guessing Your Capacity Needs

2. Test Your System At Production Scale

3. Automate To Make Architectural Experimentation Easier

4. Allow For Evolutionary Architectures

5. Drive Architecture Using Data

6. Improve Through Game Days (simulate high stress, chaos)

//-------------------------------------------------------//

# AWS Cloud Best Practices

A. Scalability : Horizontal and Vertical

B. Disposable Resources : Servers should be disposable and easily configured

C. Automation : i.e. Serverless, IaaS, Auto Scaling

D. Loose Coupling : a change or failure in one component shouldn't cascade to others

E. Services not Servers

//-------------------------------------------------------//

# Six Pillars Of A Well Architected Framework

1. Operational Excellence

2. Security

3. Reliability

4. Performance Efficiency

5. Cost Optimization

6. Sustainability


//-------------------------------------------------------//

# CAF = Cloud Adoption Framework

Build and Execute plan to digital transformation with AWS.

Common framework roles: CTO, Tech Lead, Architect, Engineer.

Groups capabilities in 6 perspectives: Business, People, Governance, Platform, Security, and Operations

— CAF Transformation Phases —

Envision, Align, Launch, Scale

— AMS = AWS Managed Services —

Team of experts


//-------------------------------------------------------//
//-------------------------------------------------------//

# MISC

— AWS Systems Manager —

Centrally manage AWS Cloud and ON-PREMISE servers.

Collect software inventory, run commands, automate tasks, configure and patch servers at scale

Create logical groups of resources such as applications, different layers of an application stack, or production versus development environments.


— AWS Systems Manager Session Manager —

Fully-managed service

Interactive browser-based shell and CLI experience. 

No need to open inbound ports, maintain bastion hosts, and manage SSH keys.

Enable compliance with corporate policies that require controlled access to instances, increase security and auditability of access to the instances while providing simplicity and cross-platform instance access to end-users.

— AWS Marketplace —

AWS Marketplace facilitates:
 1. buy/sell software that has been bundled into customized Amazon Machine Image (AMIs)
 2. buy/sell Software as a Service (SaaS) solutions
Software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS

— Acceptable Use Policy —

Describes prohibited uses of the web services offered by Amazon Web Services, Inc. and its affiliates

— U2F security key —

Universal 2nd Factor (U2F) Security Key is a device that you can plug into a USB port on your computer. 
U2F is an open authentication standard hosted by the FIDO Alliance.

— AWS Health - Service Health Dashboard —

Single place to learn about the availability and operations of AWS services.
Overall status of AWS services.

Login for personalized info re your account or organization.

Possibility to subscribe to an RSS feed to be notified of interruptions to each service.

https://health.aws.amazon.com/health/status


— AWS Health - Your Account Health Dashboard —

provides alerts and remediation guidance when AWS is experiencing events that may impact you.

— Service Health Dashboard VS Your Account Health Dashboard  —

Global VS Personal

— AWS Storage Gateway —

Hybrid cloud storage service 

Gives on-premises access to virtually unlimited cloud storage.

Encrypted by default - All data transferred between the gateway and AWS storage is encrypted using SSL

Gateway types supported: 
 - Tape Gateway
 - File Gateway
 - Volume Gateway


— Virtual MFA —

Virtual Multi-Factor Authentication (MFA) device

Think: Google Auth. 

A software app that runs on a phone or other device and emulates a physical device.

— Amazon S3 Glacier Deep Archive —

Amazon S3’s lowest-cost storage class.

Supports long-term retention and digital preservation for data that may be accessed once or twice in a year.

Use cases: regulatory compliance requirements, backup and disaster recovery

— VPC peering connection —

Networking connection between 2 VPCs.

PRIVATELTY routes traffic.

— CloudHSM —

cloud-based Hardware Security Module (HSM)

Easily generate and use your encryption keys on the AWS Cloud

AWS manages the HSM but does NOT have access to the keys

use case: regulatory and compliance reasons, must use hardware device for any data encryption operations in the cloud

— Amazon Macie —

Fully managed data security and data privacy service.

Uses machine learning and pattern matching to discover and protect your sensitive data in AWS.

Provides an inventory of Amazon S3 buckets including a list of 
 - unencrypted buckets
 - publicly accessible buckets
 - buckets shared with AWS accounts outside those you have defined in AWS Organizations

— AWS OpsWorks —

Configuration management service.

Managed instances of Chef and Puppet.

Automation platforms : use code to automate the configurations of your servers.

Automate how servers are configured, deployed, and managed.

For cloud (EC2s instances) or on-premises compute environments.

— AWS X-Ray —

Analyze and debug serverless and distributed applications 

i.e. apps built using a microservices architecture. 

Troubleshoot the root cause of performance issues and errors.

— Pros of Cloud Computing —

Trade Capital Expense for Variable Expense : instead of heavy investment, spend on-demand

— Credits —

Credits are applied in the following order:
 - Soonest expiring
 - Least number of applicable products
 - Oldest credit

— PrivateLink —

Enables private connectivity between VPCs and supported AWS services without traffic traversing the public internet. 

It ensures secure communication for applications and services.

— Transit Gateway —

Connect thousands of VPCs.

NOT using the public internet.

Data automatically encrypted.

Hub connecting to:
 - VPNs
 - VPCs
 - Direct Connect Getaways
 

Attach all your hybrid connectivity (VPN and Direct Connect connections) to a single gateway, consolidating and controlling your organization's entire AWS routing configuration in one place.



Hub-and-spoke model.

— SQS vs SNS —

BOTH can be used to decouple components of a microservices based application on AWS Cloud.

— Amazon Simple Queue Service (SQS) —

Fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.

Send, store, and receive messages between software components at any volume to decouple application tiers

Decouple and scale microservices, distributed systems, and serverless applications. 

Amazon SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware and empowers developers to focus on differentiating work.

— Amazon Simple Notification Service (SNS) —

Highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications

— Amazon MQ —

Message broker service.

Managed service.

For Apache ActiveMQ and RabbitMQ.

Makes it easy to set up and operate message brokers on AWS.

— Cost : Data Transfer —

There are three fundamental drivers of cost: compute, storage, and outbound data transfer. 

In most cases, NO charge for inbound data transfer or data transfer between other AWS services within the same region.

Tip: outbound = out of your pocket

— AWS Professional Services —

AWS Consultants

Supplement your team with specialized skills and experience

Global team of experts that can help you realize your desired business outcomes when using the AWS Cloud

— AWS Global Accelerator —

Improves availability and performance of your apps with local or global users.

Enables scaling networks, associating regional resources, managing IP addresses, improving user experience, reducing internet latency, supporting disaster recovery, ensuring higher availability

Provides static IP addresses — that act as a fixed entry point to your apps.

Good fit for non-HTTP use cases.

— Well-Architected Framework —

guidance on building secure, high-performing, resilient, and efficient infrastructure for cloud based applications. 

Based on six pillars:
 - operational excellence
 - security
 - reliability
 - performance efficiency
 - cost optimization
 - sustainability

— AWS Lightsail —

Billed monthly


— VPC Endpoint — 

Privately connect your VPC to supported AWS services and services powered by AWS PrivateLink.
This without requiring connection via internet gateway, NAT device, VPN connection, or AWS Direct Connect. 

Instances in your VPC do not require public IP addresses to communicate with resources in the service. 
Traffic between your VPC and the other service does not leave the Amazon network.

Two types of VPC endpoints:
 - interface endpoints
 - gateway endpoints

— Interface Endpoint —

Elastic network interface with a private IP address from the IP address range of your subnet that serves as an entry point for traffic destined to a supported service. Interface endpoints are powered by AWS PrivateLink, a technology that enables you to privately access services by using private IP addresses.

— Gateway Endpoint —

Gateway that you specify as a target for a route in your route table for traffic destined to a supported AWS service. 

The following AWS services are supported:
 - S3
 - DynamoDB

— VPN = Virtual Private Network —

Establish a secure and private encrypted tunnel from your on-premises network to the AWS global network. 

Comprised of two services:
 - AWS Site-to-Site VPN
 - AWS Client VPN


— What is a Site-to-Site VPN —

Securely connect your on-premises network or branch office site to your Amazon VPC.

Good solution if you have an immediate need, and have low to modest bandwidth requirements (goes over public internet).
 
— Components of Site-to-Site VPN —

Virtual private gateway (VGW) + Customer gateway

The VPN concentrator on the Amazon side of the AWS Site-to-Site VPN connection. 

— Customer gateway —

Resource in AWS that provides information to AWS about your Customer gateway device.

— Virtual private gateway —

A secure way to access the company network and resources through a VPN tunnel with encrypted data in transit. 

Enables to remotely access devices, hybrid networks, and cloud tools and provide a secured and filtered browsing experience over the internet.

— Scaling —

in / out : horizontally scale

down / up : vertically scale

— AWS CUR : AWS Cost & Usage Report —

Most comprehensive set of cost and usage data available. 

You can use it to publish your AWS billing reports to an Amazon S3 bucket that you own.

You can receive reports that break down your costs by the hour or month, by product or product resource, or by tags that you define yourself. 

AWS updates the report in your bucket once a day in comma-separated value (CSV) format.

— S3TA = Amazon S3 Transfer Acceleration —

Fast, easy, and secure transfers of files over long distances between your client and your Amazon S3 bucket.

Optimizes transfer speeds from across the world.

— Disaster Recovery Strategies —

Slowest to fastest strats

 - Backup & Restore : RPO/RTO in Hours, Data backed up, No services deployed, Cost $

 - Pilot Light strategy : RPO/RTO in 10s of Minutes, Data live, Services idle, Cost $$

 - Warm Standby : RPO/RTO in Minutes, Data live, Services run reduced capacity, Cost $$$

 - Multi-site active-active : RPO/RTO in Near real-time, Data live, Live services, Cost $$$$
 
Weight the benefits of lower RTO (recovery time objective) and RPO (recovery point objective) VS cost. 

https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iii-pilot-light-and-warm-standby/


//-------------------------------------------------------//

# Free Tier

Lambda: 1M requests and 400,000 GBs compute time

https://aws.amazon.com/free/
 
Free Tier Dashboard: under the AWS Billing Dashboard.

Free Tier Page: under "Billing and Cost Mgmt"

Always Free:
 - AWS Identity
 - Access Management (AWS IAM)
 - AWS Shield Standard, enabled by DEFAULT
 
//-------------------------------------------------------//

# Test Tips

Full screen to avoid missing an answer

Always double check if "Select Two" or "Select Three"

If you do not know:
 - deduct
 - mark question for later (even if you answer)
