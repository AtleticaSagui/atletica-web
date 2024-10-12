# Use the official Node.js image as the base image
FROM node:20-bookworm-slim

ENV TZ="America/Sao_Paulo"

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]