# This is a todo app

## Details
It utilizes a React/Redux front end, with the redux toolkit for managing actions and reducers.

The backend is a rails api, serving json objects using jbuilder

## Why a todo app?

Todo apps have a lot of the components you would find in most modern web applications:

* State management

* API Consumption

* Determining how to serve database objects in a way that minimizes the number of network requests

* Determining how to organize data from the api into the application state (much easier when you own the API)

## Setup details

* Clone the repo

* yarn install (this project used yarn rather than npm)

* bundle install (both the rails api as well as the react portion can be built from the top level)

* Bundle exec rails db:setup (creates and populates the database with some seed data, check "seeds.rb" for login info, or create a user)

* yarn watch (webpack should have built already, but I like to keep the watcher in the background)

* navigate to "localhost:3000" and either log in or sign up

## Current features

* Users can sign up, and only see todos associated with their user

* Can add and remove todos

* Can add and remove tags from each todo

* Can add and remove subtasks (steps) to todos

* Can toggle each todo complete or incomplete

## Planned additions

* actually style the page

* add multiple todo lists

* edit the title and body of the todo

* strike through finished todos

* add time/date you'd like to complete something by

* filter by complete/incomplete

* sort by when items need to be complete by

* front end authentication

* reorganize files and directories to be more consistent with the component hierarchy

## Some comments about design decisions

I was not fully able to architect a solution without the redux toolkit, but could potentially remove the dependency with a little bit more experience using Redux.

Most of the dependencies are for babel, as I prefer using the most modern version of Javascript available.
