# Loginator

## 3 Hour React App for a simple login system

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Steps to run:

## Install Dependencies

### `npm install npm i --legacy-peer-deps`

`--legacy-peer-deps` is needed because react was downgraded to support `react-easy-state`

## Run App

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Routes

`/` Clicking `Cashew Logo` redirects to the home page.

`/about` Clicking `Ways to pay` redirects to about page.

`/login` Clicking `Customer login` redirects to about page.

`/dashboard` Clicking `For Business` redirects to dashboard page. (If not logged in, redirects to login page)

## TODO

1. Api request to check if user exists.
2. Click anywhere to dismiss nav menu.
3. Move slider on pagination press.
4. Improve slider responsiveness. (Behaves weird on some mobile screens)
5. Footer subscription and copyright alignment on smaller screens. (Between mobile sizes and tablet)
6. Improve password validation (Contain numbers and special characters)

## Challenges

1. React easy state is not supported on react 18.
2. React router couldn't redirect to dashboard route.
