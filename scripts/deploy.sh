#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# Send coverage data to Codecov
bash <(curl -s https://codecov.io/bash)
# Deploy to firebase
npm run fireDeployPrep
firebase deploy --token=${FIREBASE_API_TOKEN}