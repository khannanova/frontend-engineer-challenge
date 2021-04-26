# Frontend Engineer Challenge — SPA

A SPA built with Vue.js and SCSS.<br>
Demo: https://vue-challenge.vercel.app/

## Task

Display all available books returned from the API. Display a single book information, highlighting the cover and displaying the full synopsis.

## Server

In order to solve this problem, a simple server is provided, which you should use to get the data.
Head into `front-end/q4/server` and install the server dependencies using:

```bash
yarn install
```

or

```bash
npm install
```

Run the server using:

```bash
yarn server
```

or

```bash
npm run server
```

The server should be running on port `3000`.

#### Available routes

#### http://localhost:3000/books

Returns a list of books, with their info.

#### http://localhost:3000/books/SLUG

Returns the book information for the given SLUG (404 otherwise).

## Frontend

Head into `reedsy-coding-challenge/q4/frontend` and run

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Runs unit tests

```
npm run test
```
