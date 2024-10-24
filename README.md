# Project

## Structure

```md
|-- README.md
|-- backend
|   |-- Dockerfile
|   |-- db
|   |-- index.js
|   |-- models
|   |-- routes
|   `-- utils
|-- compose.yml
|-- frontend
|   |-- Dockerfile
|   |-- README.md
|   |-- index.html
|   |-- postcss.config.js
|   |-- public
|   |-- src
|   |-- tailwind.config.js
|   |-- utils
|   `-- vite.config.js
`-- mongoDB
    |-- README.md
    `-- data
```

## setup

- [x] setup mongodb
- [x] connect backend with mongodb
- [x] create schema for endpoints
- [x] design and make frontend architecture to consume backend endpoints
- [x] express route

## Goals
- [x] search dropdown box with auto-suggest 
- [x] store all requests to `https://swapi.dev/api/starships` in a `search-requests` collection

---

# Requirements

## Technology stack
MongoDB, Node.js, ExpressJS, React, TailwindCSS 3.0 

## Task Description
In this task, a simple search application needs to be implemented as a single page with a text
field where the user can type text and the search results appear in a drop-down list below as
an auto-suggest functionality. When the user presses Enter, they should see the search result
as a list below.

## Technical Implementation:
This is web-application with external integration via a REST API.


JSON Format Response:
https://swapi.dev/api/starships/?format=json

Additional Task (Optional):
All requests to external REST API must be stored into MongoDB collection ‘search-requests’.

# Resources
- https://www.blacksbricks.de/images/product_images/original_images/stardestrrevsl1.jpg
- https://64.media.tumblr.com/cdd22d181a0ec1c9a0788bb44e38c5fe/tumblr_ohcuovgfma1ujrjg9o1_1280.jpg
- https://commons.wikimedia.org/wiki/File:Emblem_of_the_First_Galactic_Empire.svg
- https://commons.wikimedia.org/wiki/File:Rebel_Alliance_logo.svg

### Documentation
- https://lit.dev/docs/getting-started/
- https://tailwindcomponents.com/cheatsheet/
 
### Test Data Endpoint:
- Test data can be used from this endpoint.
- https://swapi.dev/api/starships
