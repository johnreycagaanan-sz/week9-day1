//! 1. What is AWS EC2? 
    // EC2 stands for Elastic Compute Cloud. 
    // EC2 is on-demand computing service on the AWS cloud platform. 
    // Under computing, it includes all the services a computing device can offer 
    // to you along with the flexibility of a virtual environment

//! 2. What are some use cases of using AWS EC2? 
    // EC2 provides us the facility to scale up or scale down as per the needs. 
    // All dynamic scenarios can be easily tackled by EC2 with the help of this feature. 
    // And because of the flexibility of volumes and snapshots, it is highly reliable 
    // for its users

//! 3. What is AWS Lambda?
    // AWS Lambda is a serverless compute service that permits you to run code without 
    // controlling or provisioning servers. Lambda uses highly available, 
    // elastic infrastructure to run your code

//! 4. What are some use cases of using AWS Lambda?
    // Operating serverless websites.
    // Rapid document conversion.
    // Predictive page rendering.

//! 5. How does AWS Lambda work for: 
//? a. File Processing
    // Lambda is a good option if you want a serverless architecture and have files 
    // that are large but still within reasonable limits. 
    // It is possible to write a lambda function that can process a large csv 
    // file with the following approach. 
    // Our lambda function will be capable of handling data sizes exceeding both its memory
    // and runtime limits. 

//? b. Web Applications
    // You organize your code into Lambda functions. 
    // Lambda runs your function only when needed and scales automatically, 
    // from a few requests per day to thousands per second. 
    // You pay only for the compute time that you consume—there is no charge 
    // when your code is not running

//? c. Stream Processing
    // Lambda reads records from the data stream and invokes your function synchronously
    // with an event that contains stream records. 
    // Lambda reads records in batches and invokes your function to process records 
    // from the batch. Each batch contains records from a single shard/data stream

//! 6. What is S3
    // It is an object storage service that offers industry-leading scalability, 
    // data availability, security, and performance. 
    // Customers of all sizes and industries can use Amazon S3 to store 
    // and protect any amount of data for a range of use cases, 
    // such as data lakes, websites, mobile applications, backup and restore, 
    // archive, enterprise applications, IoT devices, and big data analytics. 
    // Amazon S3 provides management features so that you can optimize, organize, 
    // and configure access to your data to meet your specific business, organizational, 
    // and compliance requirements.

//! 7. How does S3 work? 
    // AWS offers a wide range of storage services that can be provisioned 
    // depending on your project requirements and use case. 
    // AWS storage services have different provisions for highly confidential data, 
    // frequently accessed data, and the not so frequently accessed data. 
    // You can choose from various storage types namely, object storage, file storage, 
    // block storage services, backups, and data migration options

//! 8. What are some use cases of S3? 
    // Backup File System
    // Infrequent Access, Reduced Redundancy & Archival Storage
    // Host Static Website

//! 9. What is DynamoDB?
    // DynamoDB is a service offered by AWS to offer NoSQL database. 
    // It allows users to create databases capable of storing and retrieving 
    // any amount of data and comes in handy while serving any amount of traffic

//! 10. How does DynamoDB work? 
    // It dynamically manages each customer’s requests and provides high performance 
    // by automatically distributing data and traffic over servers. 
    // It is a fully managed NoSQL database service that is fast, 
    // predictable in terms of performance, and seamlessly scalable

//! 11. What are some use cases of DynamoDB?
    // It relieves the user from the administrative burdens of operating and scaling a 
    // distributed database as the user doesn’t have to worry about hardware provisioning, 
    // patching Softwares, or cluster scaling. It also eliminates the operational burden 
    // and complexity involved in protecting sensitive data by providing encryption at REST. 

//! 12. What is Aurora?
    // The Amazon Aurora is a relational database service offered from amazon cloud. 
    // This is one of the widely used services for the data storage, 
    // for low latency and value-based data storage and processing. 
    // Amazon Aurora is a MySQL and PostgreSQL-compatible relational database fabricated 
    // for the cloud, that consolidates the performance and accessibility of traditional 
    // databases with the simplicity and reliability of commercial databases at 1/10th the cost. 
    
//! 13. How does Aurora work?
    // It works with a clustered approach with data replication in the 
    // AWS accessibility zone for efficient data availability. 
    // The Amazon Aurora is packed with high-performance subsystems. 
    // It is MySQL and PostgreSQL engines which take advantage of fast distributed storage

//! 14. What are some use cases of Aurora?
    // Aurora provides speed and throughput up to 5 times of MySQL and 3 times of PostgreSQL 
    // with the existing system. It bolsters, high storage capacity, 
    // which can scale up to 64 Terabytes of database size for enterprise implementation. 
    // Amazon Aurora is completely managed by Amazon Relational Database Service (RDS), 
    // which automates tedious administration undertakings like hardware provisioning, 
    // database arrangement, fixing, and reinforcements.

//! 15. What is AWS VPC? 
    // Amazon Virtual Private Cloud (Amazon VPC) gives you full control over your virtual 
    // networking environment, including resource placement, connectivity, and security. 

//! 16. How does AWS VPC work? 
    // A virtual private cloud (VPC) is a virtual network dedicated to your AWS account. 
    // It is logically isolated from other virtual networks in the AWS Cloud. 
    // You can specify an IP address range for the VPC, add subnets, add gateways, 
    // and associate security groups.

//! 17. What are some use cases of VPC? 
    // Hosting Web Applications.
    // Hosting a Web or E-commerce site.
    // Migrating workloads to the AWS cloud.
    // Extending a Data Center to the cloud (Hybrid Cloud)
    // Backup or Disaster Recovery.

//! 18. What is API Gateway? 
    // Amazon API Gateway is a fully managed service that makes it easy for developers to create, 
    // publish, maintain, monitor, and secure APIs at any scale. 
    // APIs act as the "front door" for applications to access data, business logic, 
    // or functionality from your backend services. 

//! 19. How does API Gateway work? 
    // Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable 
    // real-time two-way communication applications. 
    // API Gateway supports containerized and serverless workloads, as well as web applications.

//! 20. What are some use cases of API Gateway? 
// API Gateway handles all the tasks involved in accepting and processing up to hundreds 
// of thousands of concurrent API calls, including traffic management, CORS support, 
// authorization and access control, throttling, monitoring, and API version management. 
// API Gateway has no minimum fees or startup costs. 
// You pay for the API calls you receive and the amount of data transferred out and, 
// with the API Gateway tiered pricing model, you can reduce your cost as your API usage scales.

//! 21. What is CloudFront?
    // Amazon CloudFront is a web service that speeds up distribution of your static and 
    // dynamic web content, such as .html, .css, .js, and image files, to your users. 
    // CloudFront delivers your content through a worldwide network of data centers 
    // called edge locations. When a user requests content that you're serving with CloudFront, 
    // the request is routed to the edge location that provides the lowest latency, 
    // so that content is delivered with the best possible performance. 

//! 22. How does CloudFront?
    // CloudFront speeds up the distribution of your content by routing each user request 
    // through the AWS backbone network to the edge location that can best serve your content. 
    // Typically, this is a CloudFront edge server that provides the fastest delivery 
    // to the viewer. Using the AWS network dramatically reduces the number of networks 
    // that your users' requests must pass through, which improves performance. 

//! 23. What are some use cases of CloudFront?
    // Accelerate static website content delivery
    // Serve video on demand or live streaming video
    // Encrypt specific fields throughout system processing
    // Customize at the edge

//! 24. What is Cognito?
    // With Amazon Cognito, you can add user sign-up and sign-in features and control access 
    // to your web and mobile applications. Amazon Cognito provides an identity store 
    // that scales to millions of users, supports social and enterprise identity federation, 
    // and offers advanced security features to protect your consumers and business. 
    // Built on open identity standards, Amazon Cognito supports various compliance 
    // regulations and integrates with frontend and backend development resources. 

//! 25. How does Cognito work?
    // Amazon Cognito provides authentication, authorization, and user management 
    // for your web and mobile apps. Your users can sign in directly with a user 
    // name and password, or through a third party such as Facebook, Amazon, Google or Apple.
    // The two main components of Amazon Cognito are user pools and identity pools. 
    // User pools are user directories that provide sign-up and sign-in options for your app users.

//! 26. What are some use cases of Cognito?
    // Authenticate with a user pool
    // Access your server-side resources with a user pool
    // Access resources with API Gateway and Lambda with a user pool
    // Access AWS services with a user pool and an identity pool
    // Authenticate with a third party and access AWS services with an identity pool
    // Access AWS AppSync resources with Amazon Cognito 

//! 27. What is CloudWatch?
    // CloudWatch enables you to monitor your complete stack 
    // and use alarms, logs, and events data to take automated actions and reduce mean 
    // time to resolution. This frees up important resources and allows you to focus 
    // on building applications and business value.

//! 28. How does CloudWatch work?
    // Amazon CloudWatch is basically a metrics repository. 
    // An AWS service—such as Amazon EC2—puts metrics into the repository, 
    // and you retrieve statistics based on those metrics. If you put your own custom metrics 
    // into the repository, you can retrieve statistics on these metrics as well. 

//! 29. What are some use cases of CloudWatch?
    // CloudWatch Logs can be used to monitor, store, and access log files from  EC2 instances, CloudTrail, Route 53, and other sources
    // CloudWatch Logs uses the log data for monitoring in an not; so, no code changes are required
    // CloudWatch Logs require CloudWatch logs agent to be installed on the EC2 instances and on-premises servers.

//! 30. What is Secrets Manager?
    // AWS Secrets Manager is a secrets management service that helps you protect access 
    // to your applications, services, and IT resources. 
    // This service enables you to easily rotate, manage, and retrieve database credentials, 
    // API keys, and other secrets throughout their lifecycle. 

//! 31. How does Secrets Manager work? 
    // Secrets Manager stores the encrypted data key with the protected secret data. 
    // Whenever the secret needs decryption, Secrets Manager requests AWS KMS to decrypt 
    // the data key, which Secrets Manager then uses to decrypt the protected secret data.

//! 32. What are some use cases of Secrets Manager?
    // Removing hard-coded credentials from source code.
    // Replacing configuration file secrets.
    // Pulling secrets into CI/CD systems like Jenkins, GitHub Actions and More.
    // Protecting access to privileged passwords, API keys and other managed secrets.

//! 33. What is CloudTrail?
    // Amazon CloudTrail is a service that enables governance, compliance, operational auditing, 
    // and risk auditing of your Amazon Web Services account. 
    // With CloudTrail, you can log, continuously monitor, and retain account 
    // activity related to actions across your Amazon Web Services infrastructure. 

//! 34. How does CloudTrail work?
    // CloudTrail is enabled on your AWS account when you create it. When activity occurs in your AWS account, that activity is recorded in a CloudTrail event. 
    // You can easily view events in the CloudTrail console by going to Event history.
    // Event history allows you to view, search, and download the past 90 days of activity 
    // in your AWS account. In addition, you can create a CloudTrail trail to archive, 
    // analyze, and respond to changes in your AWS resources.  

//! 35. What are some use cases of CloudTrail?
    // CloudTrail supports use cases such as auditing, security monitoring, 
    // and operational troubleshooting. 

//! 36. What is CI/CD integration?
    // CI/CD is a method to frequently deliver apps to customers by introducing 
    // automation into the stages of app development. 
    // The main concepts attributed to CI/CD are continuous integration, 
    // continuous delivery, and continuous deployment.