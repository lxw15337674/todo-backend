# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN pnpm install

# Install Playwright browsers and dependencies
RUN npx playwright install chromium --with-deps
RUN npx playwright install-deps chromium

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN pnpm run build

# Expose the application port
EXPOSE 8080

# Command to run the application
CMD ["node", "dist/main"]
