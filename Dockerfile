# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install
# If you have dev dependencies needed for build, you might do:
# RUN npm install
# RUN npm run build
# Then copy only production dependencies in a multi-stage build

# Copy the rest of your application code
# Ensure 'src' and 'dist' are handled correctly.
# It's generally better to build outside the container and copy 'dist'
# or build inside the container and ensure all source files are present.

# Option 1: Copy all source and build inside Docker (less efficient for production)
COPY . .
RUN npm run build # Assuming you have a 'build' script in package.json for TSC

# Option 2: Build on host, copy only dist and necessary files (recommended)
# This assumes you've run 'npm run build' on your local machine
# and the 'dist' directory exists and contains all compiled JS.
#
# COPY dist dist/
# COPY package.json ./
# COPY bootstrap.js ./ # if bootstrap is in root
# COPY index.js ./     # if index is in root

# Let's assume you're doing Option 1 for simplicity in this example
# If your project is structured with src/ and dist/
# and your tsconfig.json outDir is './dist' from the root of your project
# then 'dist' will be created at /backend/dist inside the container.

# EXPOSE the port your app runs on
EXPOSE 3000

# Command to run your application
# Make sure your main entry file (e.g., bootstrap.js) is correctly specified
# and that ts-node-dev is NOT used in production, use compiled JS.
CMD ["node", "dist/index.js"] 