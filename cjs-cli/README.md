# Mister Webhooks Example: barebones javascript cli 

This example features a MisterWebhooksConsumer that logs messages to the console.

It's written in commonjs and requires no transpilation or build steps
to run.

## Pre-requisites

* A Mister-Webhooks project
* A downloaded connection profile json file for a consumer in that project 
* The topic for an endpoint in that project

## Running this example
```
npm install # or use the package manager of your choice
node main.js -t <topic> -f <path-to-connection-profile>
```
