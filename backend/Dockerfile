# Use a lightweight Node image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production mode)
RUN npm install --production

# Copy the rest of the backend source
COPY . .

# Expose the port your Express server runs on
EXPOSE 5000

# Command to start the app
CMD ["npm", "start"]
