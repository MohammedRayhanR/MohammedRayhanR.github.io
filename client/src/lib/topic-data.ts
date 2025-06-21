export interface TopicSubtopic {
  title: string;
  content: string;
  mnemonic: string;
  examples?: string[];
  codeExample?: string;
}

export interface TopicData {
  id: string;
  title: string;
  intro: string;
  importance: string;
  usage: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  subtopics: TopicSubtopic[];
}

export const topicsData: TopicData[] = [
  {
    id: "git",
    title: "Git & GitHub",
    intro: "Version control system for tracking changes in source code during software development.",
    importance: "Essential for collaboration, backup, and maintaining code history in any development project.",
    usage: "Used in every software project, from solo development to large enterprise applications.",
    icon: "git-branch",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    subtopics: [
      {
        title: "Basic Git Commands",
        content: "Fundamental operations for version control: initializing repositories, staging changes, committing, and synchronizing with remote repositories.",
        mnemonic: "IACP - Initialize, Add, Commit, Push (like making a sandwich: prepare, add ingredients, wrap, serve)",
        examples: ["git init", "git add .", "git commit -m 'message'", "git push origin main"],
        codeExample: `git init
git add .
git commit -m "Initial commit"
git remote add origin <url>
git push -u origin main`
      },
      {
        title: "Branching & Merging",
        content: "Creating feature branches for isolated development, merging strategies, and resolving conflicts when code changes overlap.",
        mnemonic: "BMW - Branch, Merge, Win (like driving: change lanes, merge back, reach destination)",
        examples: ["git branch feature", "git checkout feature", "git merge main", "git rebase main"],
        codeExample: `git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git checkout main
git merge feature/new-feature`
      },
      {
        title: "GitHub Workflows",
        content: "Collaborative development using pull requests, code reviews, GitHub Actions for CI/CD, and team collaboration best practices.",
        mnemonic: "PRAC - Pull Request, Review, Action, Collaborate",
        examples: ["Create PR", "Request review", "GitHub Actions", "Merge to main"],
        codeExample: `# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test`
      }
    ]
  },
  {
    id: "databases",
    title: "Structured & Unstructured Databases",
    intro: "Data storage systems designed for different types of data organization and access patterns.",
    importance: "Critical for data persistence, retrieval, and scalability in modern applications.",
    usage: "Used in web applications, mobile apps, analytics systems, and enterprise software.",
    icon: "database",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    subtopics: [
      {
        title: "SQL Databases",
        content: "Relational databases with ACID properties, structured schemas, normalization principles, joins, and indexing for performance optimization.",
        mnemonic: "ACID - Atomicity, Consistency, Isolation, Durability (like a strong foundation)",
        examples: ["PostgreSQL", "MySQL", "SQLite", "Oracle"],
        codeExample: `SELECT u.name, p.title 
FROM users u 
JOIN posts p ON u.id = p.user_id 
WHERE u.active = true 
ORDER BY p.created_at DESC;`
      },
      {
        title: "NoSQL Databases",
        content: "Non-relational databases including document stores, key-value pairs, column-family, and graph databases for flexible, scalable data models.",
        mnemonic: "DKCG - Document, Key-value, Column, Graph (different storage styles)",
        examples: ["MongoDB", "Redis", "Cassandra", "Neo4j"],
        codeExample: `// MongoDB document
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "posts": [
    { "title": "First Post", "content": "..." }
  ]
}`
      },
      {
        title: "Database Design",
        content: "Schema design principles, performance optimization techniques, scaling strategies including sharding and replication.",
        mnemonic: "SPS - Schema, Performance, Scaling (building blocks of good design)",
        examples: ["Normalization", "Indexing", "Sharding", "Replication"],
        codeExample: `CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
-- Composite index for complex queries
CREATE INDEX idx_user_status ON users(status, created_at);`
      }
    ]
  },
  {
    id: "linux",
    title: "Linux Commands",
    intro: "Command-line interface for interacting with Linux/Unix operating systems.",
    importance: "Essential for server administration, deployment, and development workflows.",
    usage: "Used in server management, DevOps, development environments, and system administration.",
    icon: "terminal",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    subtopics: [
      {
        title: "File Operations",
        content: "Managing files and directories, setting permissions, and understanding file system hierarchy and access controls.",
        mnemonic: "LCD-CMR - List, Change, Copy-Move-Remove (basic file dance)",
        examples: ["ls -la", "cd /var/log", "cp file.txt backup/", "chmod 755 script.sh"],
        codeExample: `ls -la                    # List all files with details
cd /var/www/html         # Change directory
cp -r src/ backup/       # Copy directory recursively
chmod 644 config.txt     # Set file permissions
chown user:group file    # Change ownership`
      },
      {
        title: "Process Management",
        content: "Monitoring running processes, controlling system resources, and managing background jobs and services.",
        mnemonic: "PTKJN - Process monitoring and control commands",
        examples: ["ps aux", "top", "kill 1234", "nohup command &"],
        codeExample: `ps aux | grep node        # Find Node.js processes
top -p 1234              # Monitor specific process
kill -9 1234             # Force kill process
nohup npm start &        # Run in background
jobs                     # List background jobs`
      },
      {
        title: "System Monitoring",
        content: "Monitoring disk usage, memory consumption, network connections, and overall system health and performance metrics.",
        mnemonic: "DDFHN - Disk, Memory, Network monitoring tools",
        examples: ["df -h", "free -m", "htop", "netstat -tuln"],
        codeExample: `df -h                     # Disk usage human readable
du -sh /var/log/*        # Directory sizes
free -m                  # Memory usage in MB
netstat -tuln           # Network connections
htop                     # Interactive process viewer`
      }
    ]
  },
  {
    id: "frameworks",
    title: "Server Frameworks",
    intro: "Software frameworks that provide structure and tools for building server-side applications.",
    importance: "Accelerate development, provide security, and offer standardized patterns for web services.",
    usage: "Foundation for web APIs, microservices, and backend applications across industries.",
    icon: "layers",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    subtopics: [
      {
        title: "Express.js (Node.js)",
        content: "Minimalist web framework with middleware architecture, flexible routing system, and extensive ecosystem of plugins.",
        mnemonic: "MRE - Middleware, Routing, Ecosystem (express delivery of features)",
        examples: ["app.use()", "app.get()", "middleware", "npm packages"],
        codeExample: `const express = require('express');
const app = express();

app.use(express.json());
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
      },
      {
        title: "Django (Python)",
        content: "Batteries-included framework with built-in ORM, admin interface, authentication, and comprehensive security features.",
        mnemonic: "OAS - ORM, Admin, Security (all-in-one solution)",
        examples: ["models.py", "views.py", "admin panel", "django-admin"],
        codeExample: `# models.py
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

# views.py
from django.http import JsonResponse

def user_list(request):
    users = User.objects.all()
    return JsonResponse({'users': list(users.values())})`
      },
      {
        title: "Spring Boot (Java)",
        content: "Enterprise-grade framework with dependency injection, auto-configuration, and comprehensive production-ready features.",
        mnemonic: "DIA - Dependency Injection, Auto-configuration (spring into action)",
        examples: ["@RestController", "@Autowired", "@SpringBootApplication", "application.yml"],
        codeExample: `@RestController
@RequestMapping("/api")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}`
      }
    ]
  },
  {
    id: "http",
    title: "HTTP & Web Protocols",
    intro: "Communication protocols that enable data transfer between web clients and servers.",
    importance: "Foundation of web communication, affecting performance, security, and user experience.",
    usage: "Every web application, API, and internet service relies on these protocols.",
    icon: "globe",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    subtopics: [
      {
        title: "HTTP Methods & Status Codes",
        content: "RESTful HTTP methods (GET, POST, PUT, DELETE) and understanding response status codes for proper API communication.",
        mnemonic: "GPUD - Get, Post, Update, Delete (CRUD operations)",
        examples: ["GET /users", "POST /users", "200 OK", "404 Not Found"],
        codeExample: `// HTTP Methods
GET /api/users          // Retrieve users
POST /api/users         // Create user
PUT /api/users/123      // Update user
DELETE /api/users/123   // Delete user

// Status Codes
200 OK                  // Success
201 Created             // Resource created
400 Bad Request         // Client error
404 Not Found           // Resource not found
500 Internal Server Error // Server error`
      },
      {
        title: "Headers & Caching",
        content: "HTTP headers for metadata, cache control strategies, ETags for efficient data transfer, and compression techniques.",
        mnemonic: "HRCE - Headers, Response, Cache, ETags (HTTP communication flow)",
        examples: ["Content-Type", "Cache-Control", "ETag", "gzip"],
        codeExample: `// Request Headers
Content-Type: application/json
Authorization: Bearer token123
Accept: application/json

// Response Headers
Cache-Control: max-age=3600
ETag: "abc123"
Content-Encoding: gzip
Content-Length: 1234`
      },
      {
        title: "HTTPS & Security",
        content: "SSL/TLS encryption protocols, certificate management, and secure communication practices for protecting data in transit.",
        mnemonic: "STC - SSL, TLS, Certificates (secure transmission chain)",
        examples: ["SSL certificates", "TLS 1.3", "HTTPS redirect", "HSTS"],
        codeExample: `// Express.js HTTPS setup
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});`
      }
    ]
  },
  {
    id: "rest",
    title: "REST APIs",
    intro: "RESTful service design and implementation principles for building scalable web APIs.",
    importance: "Standard architecture for web services, enabling interoperability and scalability.",
    usage: "Foundation for modern web applications, mobile apps, and microservices communication.",
    icon: "shuffle",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    subtopics: [
      {
        title: "REST Principles",
        content: "Stateless communication, resource-based URLs, uniform interface, and proper use of HTTP methods for API design.",
        mnemonic: "SURU - Stateless, Uniform, Resource-based, Universal (REST foundation)",
        examples: ["/api/users", "/api/users/123", "stateless", "JSON"],
        codeExample: `// RESTful URL structure
GET    /api/users           // Get all users
GET    /api/users/123       // Get specific user
POST   /api/users           // Create new user
PUT    /api/users/123       // Update user
DELETE /api/users/123       // Delete user

// Nested resources
GET    /api/users/123/posts // Get user's posts
POST   /api/users/123/posts // Create post for user`
      },
      {
        title: "API Design Best Practices",
        content: "Consistent naming conventions, proper status codes, error handling, versioning strategies, and documentation standards.",
        mnemonic: "NSEVD - Naming, Status, Error, Version, Documentation",
        examples: ["v1/api/", "error responses", "pagination", "filtering"],
        codeExample: `// API Response Structure
{
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "meta": {
    "page": 1,
    "total": 50,
    "per_page": 10
  },
  "errors": null
}`
      },
      {
        title: "Authentication & Rate Limiting",
        content: "API security through authentication tokens, rate limiting to prevent abuse, and proper error handling for security.",
        mnemonic: "ART - Authentication, Rate limiting, Throttling",
        examples: ["JWT tokens", "API keys", "rate limiting", "OAuth 2.0"],
        codeExample: `// JWT Authentication
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}`
      }
    ]
  },
  {
    id: "security",
    title: "Web Security",
    intro: "XSS, CSRF, SQL Injection prevention and security best practices for web applications.",
    importance: "Critical for protecting user data, preventing attacks, and maintaining system integrity.",
    usage: "Essential for all web applications handling user data and sensitive information.",
    icon: "shield",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    subtopics: [
      {
        title: "XSS Prevention",
        content: "Cross-Site Scripting prevention through input validation, output encoding, and Content Security Policy implementation.",
        mnemonic: "VEC - Validate, Encode, CSP (prevent malicious scripts)",
        examples: ["input sanitization", "output encoding", "CSP headers", "XSS filters"],
        codeExample: `// Input sanitization
const validator = require('validator');

function sanitizeInput(input) {
  return validator.escape(input);
}

// CSP Header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; script-src 'self' 'unsafe-inline'");
  next();
});`
      },
      {
        title: "CSRF Protection",
        content: "Cross-Site Request Forgery protection using tokens, SameSite cookies, and proper authentication verification.",
        mnemonic: "TSA - Tokens, SameSite, Authentication (verify legitimate requests)",
        examples: ["CSRF tokens", "SameSite cookies", "Origin validation", "double submit"],
        codeExample: `// CSRF Protection with Express
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

// In HTML form
// <input type="hidden" name="_csrf" value="{{csrfToken}}">`
      },
      {
        title: "SQL Injection Prevention",
        content: "Preventing SQL injection through parameterized queries, input validation, and proper database access controls.",
        mnemonic: "PIV - Parameterized queries, Input validation, Validate permissions",
        examples: ["prepared statements", "parameterized queries", "input validation", "least privilege"],
        codeExample: `// Safe parameterized query
const query = 'SELECT * FROM users WHERE email = ? AND status = ?';
db.query(query, [email, status], (err, results) => {
  // Handle results
});

// NEVER do this (vulnerable to SQL injection)
// const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// Using ORM (Sequelize example)
const user = await User.findOne({
  where: {
    email: email,
    status: 'active'
  }
});`
      }
    ]
  },
  {
    id: "graphql",
    title: "GraphQL & API Documentation",
    intro: "Modern API design, versioning, and documentation with Swagger and Postman for better developer experience.",
    importance: "Enables flexible data fetching, better developer experience, and efficient API consumption.",
    usage: "Used in modern applications requiring flexible data queries and comprehensive API documentation.",
    icon: "git-branch-plus",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    subtopics: [
      {
        title: "GraphQL Fundamentals",
        content: "Query language for APIs with strong typing, single endpoint, and client-specified data fetching capabilities.",
        mnemonic: "QTS - Query, Type system, Single endpoint (precise data fetching)",
        examples: ["queries", "mutations", "subscriptions", "schema"],
        codeExample: `// GraphQL Schema
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

// GraphQL Query
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
    posts {
      title
      content
    }
  }
}`
      },
      {
        title: "API Versioning Strategies",
        content: "Different approaches to API versioning including URL versioning, header versioning, and backward compatibility strategies.",
        mnemonic: "UHB - URL versioning, Header versioning, Backward compatibility",
        examples: ["/v1/api/", "Accept-Version", "deprecation", "migration"],
        codeExample: `// URL Versioning
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Header Versioning
app.use((req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
});

// Deprecation Notice
res.setHeader('Sunset', 'Wed, 11 Nov 2024 23:59:59 GMT');
res.setHeader('Deprecation', 'true');`
      },
      {
        title: "API Documentation Tools",
        content: "Comprehensive API documentation using Swagger/OpenAPI, Postman collections, and interactive documentation for developers.",
        mnemonic: "SPI - Swagger, Postman, Interactive (document everything)",
        examples: ["OpenAPI spec", "Swagger UI", "Postman collections", "API examples"],
        codeExample: `// OpenAPI/Swagger specification
{
  "openapi": "3.0.0",
  "info": {
    "title": "User API",
    "version": "1.0.0"
  },
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "List of users",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": { "$ref": "#/components/schemas/User" }
                }
              }
            }
          }
        }
      }
    }
  }
}`
      }
    ]
  },
  {
    id: "networking",
    title: "Networking Basics",
    intro: "TCP/IP, DNS, load balancing, and network fundamentals for server-side engineering.",
    importance: "Essential for understanding how distributed systems communicate and scale.",
    usage: "Foundation for all networked applications, microservices, and distributed systems.",
    icon: "network",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    subtopics: [
      {
        title: "TCP/IP Stack",
        content: "Understanding the four-layer model: Application, Transport, Internet, and Network Access layers for data communication.",
        mnemonic: "ATIN - Application, Transport, Internet, Network (data journey layers)",
        examples: ["HTTP/HTTPS", "TCP/UDP", "IP addressing", "Ethernet"],
        codeExample: `// TCP Server Example (Node.js)
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  
  socket.on('data', (data) => {
    console.log('Received:', data.toString());
    socket.write('Echo: ' + data);
  });
  
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('TCP server listening on port 8080');
});`
      },
      {
        title: "DNS & Domain Resolution",
        content: "Domain Name System for translating human-readable domains to IP addresses, DNS records, and resolution process.",
        mnemonic: "DRCP - Domain, Resolution, Cache, Propagation (name to address)",
        examples: ["A records", "CNAME", "MX records", "DNS cache"],
        codeExample: `// DNS lookup in Node.js
const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  console.log('Address:', address); // IP address
  console.log('Family:', family);   // IPv4 or IPv6
});

// Reverse DNS lookup
dns.reverse('8.8.8.8', (err, hostnames) => {
  console.log('Hostnames:', hostnames);
});

// DNS record types
// A Record: domain.com -> 192.168.1.1
// CNAME: www.domain.com -> domain.com
// MX: mail.domain.com -> mail server`
      },
      {
        title: "Load Balancing",
        content: "Distributing network traffic across multiple servers using different algorithms and strategies for high availability.",
        mnemonic: "RRW - Round Robin, Weighted, Random (traffic distribution methods)",
        examples: ["round robin", "least connections", "weighted", "health checks"],
        codeExample: `// Simple load balancer (Node.js)
const http = require('http');
const httpProxy = require('http-proxy-middleware');

const servers = [
  'http://server1:3000',
  'http://server2:3000',
  'http://server3:3000'
];

let currentServer = 0;

const proxy = httpProxy({
  target: servers[currentServer],
  changeOrigin: true,
  router: (req) => {
    const target = servers[currentServer];
    currentServer = (currentServer + 1) % servers.length;
    return target;
  }
});

http.createServer(proxy).listen(80);`
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    intro: "CI/CD, containerization, deployment, and infrastructure management for modern software delivery.",
    importance: "Essential for automated deployment, scaling, and maintaining reliable software systems.",
    usage: "Used in all modern software development workflows for deployment and infrastructure management.",
    icon: "infinity",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    subtopics: [
      {
        title: "CI/CD Pipelines",
        content: "Continuous Integration and Continuous Deployment pipelines for automated testing, building, and deployment of applications.",
        mnemonic: "BTD - Build, Test, Deploy (automated software delivery)",
        examples: ["GitHub Actions", "Jenkins", "GitLab CI", "automated testing"],
        codeExample: `# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to server
        run: |
          ssh user@server 'cd /app && git pull && npm install && pm2 restart app'`
      },
      {
        title: "Containerization",
        content: "Using Docker for application packaging, container orchestration with Kubernetes, and microservices deployment strategies.",
        mnemonic: "DKC - Docker, Kubernetes, Containers (package and orchestrate)",
        examples: ["Dockerfile", "docker-compose", "Kubernetes", "container registry"],
        codeExample: `# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret`
      },
      {
        title: "Infrastructure as Code",
        content: "Managing infrastructure through code using tools like Terraform, configuration management, and cloud provisioning.",
        mnemonic: "TCC - Terraform, Configuration, Cloud (infrastructure as code)",
        examples: ["Terraform", "CloudFormation", "Ansible", "cloud resources"],
        codeExample: `# main.tf (Terraform)
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.micro"

  tags = {
    Name = "web-server"
    Environment = "production"
  }
}

resource "aws_security_group" "web_sg" {
  name_prefix = "web-"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`
      }
    ]
  },
  {
    id: "ssr",
    title: "Server-Side Rendering",
    intro: "SSR concepts, benefits, and implementation strategies for improved performance and SEO.",
    importance: "Critical for SEO, initial page load performance, and better user experience.",
    usage: "Used in content-heavy websites, e-commerce platforms, and SEO-critical applications.",
    icon: "server",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-600",
    subtopics: [
      {
        title: "SSR vs CSR",
        content: "Understanding the differences between Server-Side Rendering and Client-Side Rendering, their trade-offs and use cases.",
        mnemonic: "SPH - SEO, Performance, Hydration (SSR advantages)",
        examples: ["Next.js", "Nuxt.js", "SvelteKit", "initial load"],
        codeExample: `// Next.js SSR example
export async function getServerSideProps(context) {
  const { params } = context;
  
  // Fetch data on the server
  const user = await fetch(\`\${API_URL}/users/\${params.id}\`)
    .then(res => res.json());
  
  return {
    props: {
      user
    }
  };
}

export default function UserPage({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`
      },
      {
        title: "Static Site Generation",
        content: "Pre-rendering pages at build time for maximum performance, using tools like Next.js, Gatsby, and static site generators.",
        mnemonic: "PBD - Pre-render, Build time, Deploy (static optimization)",
        examples: ["getStaticProps", "getStaticPaths", "incremental regeneration", "CDN"],
        codeExample: `// Next.js Static Generation
export async function getStaticProps() {
  const posts = await fetch('\${API_URL}/posts')
    .then(res => res.json());
  
  return {
    props: { posts },
    revalidate: 3600 // Regenerate every hour
  };
}

export async function getStaticPaths() {
  const posts = await fetch('\${API_URL}/posts')
    .then(res => res.json());
  
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));
  
  return {
    paths,
    fallback: 'blocking'
  };
}`
      },
      {
        title: "Hydration Strategies",
        content: "Techniques for making server-rendered content interactive on the client, including progressive hydration and islands architecture.",
        mnemonic: "PIR - Progressive, Islands, Reactive (hydration patterns)",
        examples: ["React hydration", "partial hydration", "streaming SSR", "islands"],
        codeExample: `// React SSR with hydration
// Server side
import { renderToString } from 'react-dom/server';

const html = renderToString(<App />);

const fullHtml = \`
<!DOCTYPE html>
<html>
<head><title>SSR App</title></head>
<body>
  <div id="root">\${html}</div>
  <script src="/bundle.js"></script>
</body>
</html>
\`;

// Client side
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('root');
hydrateRoot(container, <App />);`
      }
    ]
  },
  {
    id: "auth",
    title: "Authentication & Authorization",
    intro: "JWT, OAuth, session management, and access control for secure user management.",
    importance: "Critical for protecting user accounts, controlling access, and maintaining application security.",
    usage: "Essential for any application with user accounts, role-based access, and protected resources.",
    icon: "key",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    subtopics: [
      {
        title: "JWT Authentication",
        content: "JSON Web Tokens for stateless authentication, token structure, signing algorithms, and security best practices.",
        mnemonic: "HSP - Header, Signature, Payload (JWT structure)",
        examples: ["JWT tokens", "Bearer authentication", "token expiration", "refresh tokens"],
        codeExample: `const jwt = require('jsonwebtoken');

// Generate JWT
function generateToken(user) {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email 
    },
    process.env.JWT_SECRET,
    { 
      expiresIn: '1h',
      issuer: 'myapp',
      audience: 'myapp-users'
    }
  );
}

// Verify JWT middleware
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
}`
      },
      {
        title: "OAuth 2.0 & Social Login",
        content: "OAuth 2.0 flow for third-party authentication, social login integration, and secure authorization delegation.",
        mnemonic: "ACR - Authorization Code, Redirect, Token (OAuth flow)",
        examples: ["Google OAuth", "GitHub login", "authorization code", "access tokens"],
        codeExample: `// OAuth 2.0 with Passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Save user to database
  User.findOrCreate({
    googleId: profile.id,
    email: profile.emails[0].value,
    name: profile.displayName
  }, (err, user) => {
    return done(err, user);
  });
}));

// Routes
app.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard');
  });`
      },
      {
        title: "Role-Based Access Control",
        content: "Implementing role-based permissions, access control lists, and authorization middleware for protecting resources.",
        mnemonic: "RPA - Roles, Permissions, Access (authorization layers)",
        examples: ["user roles", "permissions", "middleware", "access control"],
        codeExample: `// Role-based middleware
const roles = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
};

function requireRole(allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
}

// Usage
app.get('/admin/users', 
  authenticateToken,
  requireRole([roles.ADMIN]),
  (req, res) => {
    // Admin only endpoint
  });

app.delete('/posts/:id',
  authenticateToken,
  requireRole([roles.ADMIN, roles.MODERATOR]),
  (req, res) => {
    // Admin or moderator can delete posts
  });`
      }
    ]
  },
  {
    id: "microservices",
    title: "Microservices",
    intro: "Distributed architecture patterns and service communication for scalable applications.",
    importance: "Enables independent deployment, scaling, and technology diversity in large applications.",
    usage: "Used in enterprise applications, cloud-native systems, and high-scale distributed platforms.",
    icon: "boxes",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    subtopics: [
      {
        title: "Service Architecture",
        content: "Designing microservices with single responsibility, loose coupling, and high cohesion principles.",
        mnemonic: "SLH - Single responsibility, Loose coupling, High cohesion",
        examples: ["domain boundaries", "service boundaries", "API contracts", "data ownership"],
        codeExample: `// User Service
const express = require('express');
const app = express();

// User service only handles user-related operations
app.get('/users/:id', async (req, res) => {
  const user = await userRepository.findById(req.params.id);
  res.json(user);
});

app.post('/users', async (req, res) => {
  const user = await userRepository.create(req.body);
  res.status(201).json(user);
});

// Order Service (separate service)
const orderApp = express();

orderApp.get('/orders/:id', async (req, res) => {
  const order = await orderRepository.findById(req.params.id);
  
  // Call user service for user details
  const user = await fetch(\`\${USER_SERVICE_URL}/users/\${order.userId}\`)
    .then(res => res.json());
  
  res.json({ ...order, user });
});`
      },
      {
        title: "Service Communication",
        content: "Inter-service communication patterns including synchronous REST, asynchronous messaging, and event-driven architecture.",
        mnemonic: "RAM - REST, Async messaging, Message queues",
        examples: ["REST APIs", "message queues", "event bus", "service discovery"],
        codeExample: `// Synchronous REST communication
const axios = require('axios');

class OrderService {
  async createOrder(orderData) {
    // Call inventory service
    const inventory = await axios.get(
      \`\${INVENTORY_SERVICE}/check/\${orderData.productId}\`
    );
    
    if (inventory.data.available < orderData.quantity) {
      throw new Error('Insufficient inventory');
    }
    
    // Call payment service
    const payment = await axios.post(
      \`\${PAYMENT_SERVICE}/charge\`,
      { amount: orderData.total, cardToken: orderData.cardToken }
    );
    
    // Create order
    const order = await this.repository.create(orderData);
    
    // Publish order created event
    await this.eventBus.publish('order.created', order);
    
    return order;
  }
}

// Asynchronous event handling
const EventEmitter = require('events');
const eventBus = new EventEmitter();

eventBus.on('order.created', async (order) => {
  // Send email notification
  await emailService.sendOrderConfirmation(order);
  
  // Update analytics
  await analyticsService.trackOrderCreated(order);
});`
      },
      {
        title: "Service Discovery & Load Balancing",
        content: "Dynamic service registration, discovery mechanisms, and load balancing strategies for distributed systems.",
        mnemonic: "RDL - Registration, Discovery, Load balancing",
        examples: ["service registry", "health checks", "circuit breakers", "load balancers"],
        codeExample: `// Service registry with Consul
const consul = require('consul')();

class ServiceRegistry {
  async registerService(name, port, health) {
    await consul.agent.service.register({
      name: name,
      port: port,
      check: {
        http: \`http://localhost:\${port}\${health}\`,
        interval: '10s'
      }
    });
  }
  
  async discoverService(serviceName) {
    const services = await consul.health.service({
      service: serviceName,
      passing: true
    });
    
    return services[0].map(s => ({
      host: s.Service.Address,
      port: s.Service.Port
    }));
  }
}

// Circuit breaker pattern
class CircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.threshold = threshold;
    this.timeout = timeout;
    this.failureCount = 0;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.nextAttempt = Date.now();
  }
  
  async call(fn) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
  
  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}`
      }
    ]
  },
  {
    id: "websockets",
    title: "WebSockets",
    intro: "Real-time communication and bidirectional data transfer between client and server.",
    importance: "Essential for real-time features like chat, live updates, collaborative editing, and gaming.",
    usage: "Used in chat applications, live dashboards, collaborative tools, and real-time gaming.",
    icon: "zap",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    subtopics: [
      {
        title: "WebSocket Fundamentals",
        content: "Understanding WebSocket protocol, connection lifecycle, and differences from traditional HTTP request-response pattern.",
        mnemonic: "HPU - Handshake, Persistent connection, Upgrade (WebSocket lifecycle)",
        examples: ["connection", "message events", "close events", "error handling"],
        codeExample: `// WebSocket Server (Node.js with ws library)
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
  console.log('Client connected from', req.connection.remoteAddress);
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'welcome',
    message: 'Connected to server'
  }));
  
  // Handle incoming messages
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      console.log('Received:', message);
      
      // Echo message back to client
      ws.send(JSON.stringify({
        type: 'echo',
        data: message
      }));
    } catch (error) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Invalid JSON'
      }));
    }
  });
  
  // Handle connection close
  ws.on('close', (code, reason) => {
    console.log('Client disconnected:', code, reason);
  });
  
  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

// Client-side WebSocket
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected to server');
  ws.send(JSON.stringify({ message: 'Hello Server!' }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};`
      },
      {
        title: "Real-time Chat System",
        content: "Building scalable chat applications with rooms, user management, message broadcasting, and presence detection.",
        mnemonic: "RUB - Rooms, Users, Broadcast (chat system components)",
        examples: ["chat rooms", "user presence", "message history", "typing indicators"],
        codeExample: `// Chat Server with Socket.IO
const io = require('socket.io')(server);

const users = new Map();
const rooms = new Map();

io.on('connection', (socket) => {
  // User joins
  socket.on('user:join', (userData) => {
    users.set(socket.id, {
      id: userData.id,
      name: userData.name,
      room: null
    });
    
    socket.emit('user:joined', { success: true });
  });
  
  // Join room
  socket.on('room:join', (roomId) => {
    const user = users.get(socket.id);
    if (user) {
      socket.join(roomId);
      user.room = roomId;
      
      // Notify others in room
      socket.to(roomId).emit('user:entered', {
        userId: user.id,
        name: user.name
      });
      
      // Send room info to user
      const roomUsers = Array.from(users.values())
        .filter(u => u.room === roomId);
      socket.emit('room:info', { users: roomUsers });
    }
  });
  
  // Send message
  socket.on('message:send', (messageData) => {
    const user = users.get(socket.id);
    if (user && user.room) {
      const message = {
        id: Date.now(),
        userId: user.id,
        userName: user.name,
        content: messageData.content,
        timestamp: new Date().toISOString()
      };
      
      // Broadcast to room
      io.to(user.room).emit('message:received', message);
    }
  });
  
  // Typing indicator
  socket.on('typing:start', () => {
    const user = users.get(socket.id);
    if (user && user.room) {
      socket.to(user.room).emit('user:typing', {
        userId: user.id,
        name: user.name
      });
    }
  });
  
  socket.on('typing:stop', () => {
    const user = users.get(socket.id);
    if (user && user.room) {
      socket.to(user.room).emit('user:stopped_typing', {
        userId: user.id
      });
    }
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user && user.room) {
      socket.to(user.room).emit('user:left', {
        userId: user.id,
        name: user.name
      });
    }
    users.delete(socket.id);
  });
});`
      },
      {
        title: "Scaling WebSocket Applications",
        content: "Strategies for scaling WebSocket applications including load balancing, message queues, and multi-server synchronization.",
        mnemonic: "LMS - Load balancing, Message queues, Synchronization",
        examples: ["Redis adapter", "sticky sessions", "horizontal scaling", "message persistence"],
        codeExample: `// Scaling with Redis adapter
const redis = require('redis');
const redisAdapter = require('socket.io-redis');

// Redis client for Socket.IO adapter
const io = require('socket.io')(server);
io.adapter(redisAdapter({ 
  host: 'localhost', 
  port: 6379 
}));

// Redis for message persistence and cross-server communication
const redisClient = redis.createClient();
const redisSubscriber = redis.createClient();

// Message persistence
async function saveMessage(roomId, message) {
  const key = \`chat:messages:\${roomId}\`;
  await redisClient.lpush(key, JSON.stringify(message));
  await redisClient.ltrim(key, 0, 99); // Keep last 100 messages
}

async function getMessageHistory(roomId) {
  const key = \`chat:messages:\${roomId}\`;
  const messages = await redisClient.lrange(key, 0, -1);
  return messages.map(msg => JSON.parse(msg)).reverse();
}

// Cross-server event handling
redisSubscriber.subscribe('chat:events');
redisSubscriber.on('message', (channel, message) => {
  const event = JSON.parse(message);
  
  switch (event.type) {
    case 'user:joined':
      io.to(event.roomId).emit('user:entered', event.data);
      break;
    case 'message:sent':
      io.to(event.roomId).emit('message:received', event.data);
      break;
  }
});

// Load balancer configuration (nginx)
/*
upstream socket_nodes {
    ip_hash; # Sticky sessions
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    
    location /socket.io/ {
        proxy_pass http://socket_nodes;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
*/`
      }
    ]
  }
];

export function getTopicById(id: string): TopicData | undefined {
  return topicsData.find(topic => topic.id === id);
}

export function getAllTopics(): TopicData[] {
  return topicsData;
}
