# Dockerized HashFoundry React Application

This document provides instructions for building and running the HashFoundry React application using Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop for Mac/Windows)

## Quick Start

The application can be built and started with a single command using Docker Compose:

```bash
docker-compose up -d
```

This will:
1. Build the Docker image using the Dockerfile
2. Start the container in detached mode
3. Make the application available at http://localhost:3000

To stop the application:

```bash
docker-compose down
```

## Manual Docker Commands

If you prefer not to use Docker Compose, you can use these Docker commands:

### Build the Image

```bash
docker build -t hashfoundry-react:latest .
```

### Run the Container

```bash
docker run -d -p 3000:80 --name hashfoundry-react-app hashfoundry-react:latest
```

### Stop and Remove the Container

```bash
docker stop hashfoundry-react-app
docker rm hashfoundry-react-app
```

## Development with Docker

For development, you might want to use volume mounts to enable hot-reloading. Here's an example docker-compose configuration for development:

```yaml
version: '3.8'

services:
  hashfoundry-app-dev:
    build:
      context: .
      dockerfile: Dockerfile.dev  # You would need to create this
    container_name: hashfoundry-react-dev
    ports:
      - "3000:3000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm start
```

## Customization

### Custom Nginx Configuration

To use a custom Nginx configuration:

1. Create an nginx.conf file in your project root
2. Uncomment the volumes section in docker-compose.yml

### Environment Variables

To pass environment variables to the React application during build:

1. Create a .env file in your project root
2. Modify the Dockerfile to include the ENV variables during build

## Troubleshooting

- If you encounter EADDRINUSE errors, make sure nothing else is running on port 3000 or change the port mapping in docker-compose.yml
- For build errors, check that your Node.js version in the Dockerfile is compatible with your application
- For access errors, ensure Docker has the necessary permissions to access your project directory
