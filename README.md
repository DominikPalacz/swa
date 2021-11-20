## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Functionality](#The-scope-of-functionality)

## General info

### Introduction - the purpose of the project

The aim of this task is to build a simple web application. The application should display the location of the provided IP address or URL on the map.

## Technologies

Project is created with:

- React
- leaflet
- bulma
- axios

## Setup

### Activation, Available Scripts

```
$ cd ../swa
$ npm install
$ npm start
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
To run this project, install it locally using npm:

.env (you can obtain free API KEY here -> https://ipstack.com/signup/free)

## Illustrations

## The scope of functionality

- Application specification

* SPA (Single Page Application) that communicates with a RESTful API
* Used https://ipstack.com for the geolocation of IP addresses and URLs
* For displaying location on map leaflet
* The application is hosted on surge.sh http://sofomo-app.surge.sh/

- Application UI specifications

* Landing on this application should display user IP with it’s location on the map
* Under map and IP should be search box in which you can only write IP address or URL
* If user provides a wrong IP address or URL then appropriate message should be displayed
* Using this search box you can locate searched query (IP address or URL) and display it on map below search box
* The application should store history of searched locations during session
* Any css library/framework can be used

## Examples of use

## Project status

basically MVP v.0.1

## Sources

## Other informations

## License

MIT

**Free Software**