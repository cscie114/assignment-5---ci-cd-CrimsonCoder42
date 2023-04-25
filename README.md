# Assignment-5-CICD

This repository holds the starter code for assignment 5, in which we practice the fundamentals of CI/CD.

The following objectives are met:

1. Build a Jamstack application that leverages a serverless function that provides some kind of dynamic functionality to the user.
2. Use GitHub Actions to create a CI pipeline that performs automated tests when code is pushed to a GitHub repository.
3. Use a GitHub Action to automatically deploy a successful build of your application to the Netlify hosting service.

## Objective 1: Build a Jamstack Application

The `index.js` file provided is a simple Gatsby (Jamstack) application that displays a list of movie posters with links.

## Objective 2: CI Pipeline with GitHub Actions

The `main.yml` file provided is a GitHub Actions workflow that defines a CI pipeline. It contains three jobs:

1. **Linting**: Runs ESLint to check for any code issues.
2. **Testing**: Runs Jest to execute test suites.
3. **Deployment**: Deploys the application to Netlify if both linting and testing jobs are successful.

The workflow is triggered on every push or pull request to the `main` branch.

## Objective 3: Automatic Deployment to Netlify

The `main.yml` file includes a `deploy` job that uses `nwtgck/actions-netlify@v2.0` action to automatically deploy the Gatsby application to Netlify.

The deployment step requires the following environment variables, which are stored in GitHub secrets:

- `NETLIFY_AUTH_TOKEN`: Netlify personal access token for authentication.
- `NETLIFY_SITE_ID`: The unique identifier of the Netlify site to deploy.

Once the build passes both the linting and testing jobs, the deploy job starts and automatically deploys the application to Netlify.

## Running the Application Locally

To run the Assignment-5-CICD Gatsby application locally, follow these steps:

1. **Clone the repository**: Open a terminal, navigate to your desired directory, and run the following command to clone the repository:
 
   ```git clone git@github.com:cscie114/assignment-5---ci-cd-CrimsonCoder42.git```

2. **Navigate to the project directory**: Change your current directory to the newly cloned repository:


3. **Install the dependencies**: Run the following command to install the required dependencies:
```npm ci```

4. **Run the development server**: Start the Gatsby development server by executing the following command:
```gatsby develop```