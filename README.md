# Blobify
## Project description

Blobify is a Spotify-powered web application that previews songs from four different popular playlists in an unique and interactive way. Songs are presented as 2D animated blobs whose attributes depend on actual acoustical features such as energy, tempo and key. Dragging a blob and dropping it in a specific area of the screen adds it to a custom collection, where all the user's favourite songs are stored. Upon opening up the collection, they are presented as a table with different attributes.

## Project status

This project is currently being developed in its last details, and improvements are being implemented after getting reviewed by people outside the development team. In particular, responsiveness for mobile accessibility is the area that is being focused on. The [pressure.js](https://pressurejs.com) library, in particular, was used to enable force touch on iPhones as a replacement to the right click of the mouse.

User evaluations were collected as screen recordings, heatmaps and questionnaires with [hotjar](https://www.hotjar.com) and [videoask](https://www.videoask.com/).

## Setup

Follow the steps below to get started.

1. Generate a new API access token (client id and secret id) on [the developers portal of Spotify](https://developer.spotify.com)
2. Clone the repository from GitHub
3. Navigate to the main application folder
4. In `src/` create a apiConfig.js file, with the following content:
```
export const tokenENDPOINT= "https://accounts.spotify.com/api/token";
export const playlistENDPOINT = "https://api.spotify.com/v1/playlists/";
export const audioENDPOINT = "https://api.spotify.com/v1/audio-features/";

export const clientID = "your client id goes here";
export const secretID = "your secret id goes here";
```
5. Back in the main application folder, install dependencies
```
$ npm install
```
6. Install firebase
```
$ npm install firebase
```
7. Build the project
```
$ npm run build
```
8. Start a firebase development server
```
$ firebase serve --only hosting
```
9. Access localhost through your local browser (the default port is 5000)

## Structure
The index file is located at `src/index.html`, the main script at `src/components/App.js`. The application, developed in [React-redux](https://react-redux.js.org), follows an MVC pattern with functional components distinguished into *containers* and *presentational*. The three views implemented are: **search** (`src/components/Search`), where the songs retrieved from Spotify are presented; **navbar** (`src/components/Navbar`), where you can switch between different playlists, add the songs to the custom collection and mute/unmute the app; **playlist** (`src/components/Playlist`), where the content of the custom collection is displayed.

For the creation and animation of the blobs that represent the songs through the [two.js](https://two.js.org) library, a separate script was created in `public/blobCreator.js`. This keeps the model script (`src/PlaylistModel.js`) tidy and legible. In it, the backend of the application is implemented by connecting with a [Firestore database](https://firebase.google.com/docs/firestore) and adding/deleting songs to/from the custom collection.

Other useful resources like fonts, svg graphic elements and the main stylesheet are all inside the `src/` directory.

## Deployment
The latest version of the `development` branch on GitHub was deployed [here](https://iprog2020.web.app/). To deploy your own version of the project, simply run the following two commands in your command prompt:
```
$ npm run build
$ firebase deploy
```

## Authors
- Sabina Nordell: <sabnor@kth.se>
- Daniel Parhizgar: <dpar@kth.se>
- Alessandro Iop: <aiop@kth.se>
- Karolin Valaszkai: <karolinv@kth.se>
