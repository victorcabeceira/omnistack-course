# omnistack-course
A tinder app copycat using only Javascript ecosystem. Following rocketseat omnistack 8.0 course by RocketSeat. 
#### Obs. 1: All assets and styles were given in the course.
#### Obs. 2: This is NOT a comercial product.
#### Obs. 3: This project aims at showing an example 'tinder' app made entirely using Javascript (and related techonologies), with Express on the backend, ReactJs on frontend and React Native on mobile.
#### Obs. 4: Any one can user any github username, so likes/dislikes/matches don't necessarily means the username owner intention or feeling toward others users. 

# Dependencies (check each package.json to see the correct version used)
- node.js
- yarn
- android emulator

# Backend
To run the backend, access /backend, and run (it will be run on 3333 port):
> yarn install

> yarn dev

# Frontend
To run the frontend, access /frontend, and run:
> yarn install

> yarn start

# Mobile
To run the mobile, first access /mobile, and run:
> yarn install

> adb reverse tcp:3333 tcp:3333 (to link localhost to the mobile app)

> yarn start

> react-native run-android

# How to use the app (both frontend and mobile)
The app have 2 screens, the first is to login, just enter a valid github username and you will be redirected to the main page, where you'll see every other valid github username that was already given. On that screen you can either like or dislike other users. If two users liked each other, a 'It's a match' screen will appear, indicating that a user you liked, liked you back.
