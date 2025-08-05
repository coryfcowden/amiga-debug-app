# Use an official Node.js runtime as a base image
FROM node:lts-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the port your server listens on
EXPOSE 9090

# Run the server using ts-node
CMD ["npx", "ts-node", "backend/server.ts"]
