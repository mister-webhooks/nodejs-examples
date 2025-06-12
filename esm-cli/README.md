# Mister Webhooks Example: Typescript cli 

This example features a MisterWebhooksConsumer that logs messages to the console. 

It's written in typescript and includes a build script to transpile or can
be run directly from the typescript source using tsx.


## Pre-requisites

* A Mister-Webhooks project
* A downloaded connection profile json file for a consumer in that project 
* The topic for an endpoint in that project

## Running this example

Option 1 - build and run as javascript
```
npm install # or use the package manager of your choice
node dist/main.js -t <topic> -f <path-to-connection-profile>
```

Option 2 - use tsx
```
npm install
npm run dev -- -t <topic> -f <path-to-connection-profile>
```
