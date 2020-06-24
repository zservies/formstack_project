# formstack_project
## How-to run
### UI
To run the application, with the repository open in a text editor or terminal, run the command ``cd record-ui`` to open the `record-ui` directory and run the command: ``npm-start``.

### Lambdas, DynamoDB, API Gateway
All of the backend services have already been created and deployed using the serverless framework. They will automatically spin up when used. To redeploy after making a change to a backend service run the command: ``sls deploy`` in the `record-service` directory.
