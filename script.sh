#!/bin/bash
set -e

# Create a .dockerignore file if it doesn't exist, to exclude node_modules
if [ ! -f .dockerignore ]; then
  echo "node_modules" > .dockerignore
  echo "Created .dockerignore to exclude node_modules."
fi

# Build the Docker image
echo "Building Docker image..."
docker build -t my-node-app .

# Define the timezones to test
timezones=("America/New_York" "Asia/Kolkata" "Asia/Kuala_Lumpur")

# Loop through each timezone and run the container
for tz in "${timezones[@]}"; do
  echo "========================================"
  echo "Running for timezone: $tz"
  echo "========================================"
  docker run -e TZ="$tz" my-node-app
  echo ""
done

echo "All tests completed."
