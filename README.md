# AWS-Serverless-websocket-mongo-interaction
This is a repo that demonstrates serverless lambda handling api gateway socket requests via interfacing with mongodb. Works hand-in-hand with micro-frontend project also on my account. That repo can be found here: https://github.com/TJSTONE99/Single-spa-micro-front-end-tracer
That repo also contains some more information in relation to this repo as well as a schematic to how the whole system works. However, in short this is a local (never ran on real life aws) serverless lambda node project that allows websockets to be initialised by the client by tapping into aws client gateway and handling events based on the socket event received. i.e. the $connect event would be ported to the connect.handler file.
To allow this project to run locally multiple plugins are required and can be seen within .yaml as well as webpack. For this reason, `tsc` has to be run upon building the serverless instance to convert the typescript driven syntax into the raw js that aws can run.

Installation:

	•	To run the project, open a new terminal with node installed (I used node 13.12.0 for development) and navigate to the directory containing the project.
	•	Now run the command `npm install` - to install all node_module dependencies listed in the package.json file
	•	Next run the command `npm start`
	•	Ensure that your mongo instance is also running, otherwise it will spark exceptions when attempting to connect to the mongoclient.

Other considerations:
• Environmental variables are stored in the `.env` file and then exported within the `config.ts` to allow them to support autocomplete. So, adding/removing would require alterations to both files. However, alterations would only require changes to the `.env`. Potential changes that would have to be actively considered when building would be the mongodb url/port and database name should you wish to store the relevant data under a different namespace.
• Because this is running locally, debugging has been made easy so reference the included .vscode/launch.json file to add your debugging profile & check out the associated debug command within the package.json that the launch config is triggering. It highlights serverless needs to be installed locally(your apps node_modules) and globally (within the node specific version directory within node_modules). Otherwise, the debugger will not attach correctly because the instance will fail to build.
