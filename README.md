# Sesam frontend challenge
A small programming challenge for applicants for frontend positions in Sesam.

# Overview
This task is designed to test some general skills that are important for a frontend developer without being too time-consuming. Some of the things you encounter while working on this task: Git, GitHub, a JSON REST API, JavaScript (React), CSS.

# Setup
Fork this repository to your own GitHub account as a private repository (don't create pull requests to https://github.com/sesam-io/frontend-challenge directly). Add `@branislavjenco`, `@BaardBouvet` and `@grove` as collaborators (you can do this when you are finished or right at the start). This repository has an empty [Create React App](https://github.com/facebook/create-react-app) application set up under the `/frontend-challenge` directory so that you don't have to worry about setting up the development environment. 
Run `yarn install` in thet `/frontend-challenge` directory to install the dependencies. After that, you can just run `yarn start` to spin up the development server and work on files in the `/src` directory.

# Task
We want you to create a very simple React single-page application for browsing around a group of users. Use the public [JSON Placeholder API](https://jsonplaceholder.typicode.com/), specifically the `https://jsonplaceholder.typicode.com/users` endpoint, which returns a JSON array of 10 users. One of the users objects looks something like this:
```
{
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
```

The Base page of the app shows a collection of Cards, one for each user. Each Card shows the name of the user and the name of the company they work for. In this view, you are able to sort the Cards based on three possible attributes: the name of the user, company name and their city. There is also a Search Box, where you can type text to filter the cards that are shown. The filtering is done based on the name attribute of the users.

When clicking a Card, a new User page opens up where all the information from the user object is laid out. Make sure to be able to get back to the Base page from the User page.

You can choose the layout of the Base page and the User page, how big the Cards and so on, it's only important to be simple and clear.

# Notes
- do not hesitate to ask any questions
- don't worry if you can't finish all aspects of the task - make notes on where you got stuck and why
- you don't have to spend too much time making it look pretty - just use some basic CSS to make the UI clear and readable
- we recommend using `fetch` for getting the user data


