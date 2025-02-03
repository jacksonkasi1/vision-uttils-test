FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy your application code
COPY . .

# Run the application
CMD ["node", "index.js"]
