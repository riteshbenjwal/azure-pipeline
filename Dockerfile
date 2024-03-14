# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies inside the Docker image
RUN npm install

# Bundle the source code inside the Docker image
COPY . .

# Make the app's port available to the outside
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "server.js"]
