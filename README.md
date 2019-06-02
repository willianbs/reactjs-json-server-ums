# About

I've used **ReactJs** with some libraries for front-end and created a **[fake server](<[https://github.com/typicode/json-server](https://github.com/typicode/json-server)>)** to mock an API.

_Instructions follows:_

## Fake server

Just to make it simpler to mock an API, I've used `json-server`.

### Setting up the server

Install JSON Server:

```
npm install -g json-server
```

To start the server, just run:

```
json-server --watch server/db.json --port 3004
```

_Using port **3004** to avoid conflicts with the application itself._

Now if you go to [http://localhost:3004/db](http://localhost:3000/db), you'll get the full `database (JSON formatted)`

#### List all users

[http://localhost:3004/users](http://localhost:3000/users)

#### List all groups

[http://localhost:3004/groups](http://localhost:3000/groups)

## Front-end [ReactJS]

First of all, use `yarn` or `npm install` to install all dependencies

### Running the app

In the project directory, you can run:

### `npm start` or `yarn start`

'*' *I prefer using yarn\*

Runs the app.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
