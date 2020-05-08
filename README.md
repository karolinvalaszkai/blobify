## Project 

Blobify is a Spotify-powered web application that previews songs from four different popular playlists in an unique and interactive way. Songs are presented as 2D animated blobs whose attributes depend on actual acoustical features such as energy, tempo and key. Dragging a blob and dropping it in a specific area of the screen adds it to a custom collection, where all the user's favourite songs are stored. Upon opening up the collection, they are presented as a table with different attributes.

## Project status

This project is currently being developed in its last details, and improvements are being implemented after getting reviewed by people outside the development team. In particular, responsiveness for mobile accessibility is the area that is being focused on. 

User evaluations were collected through [hotjar](https://www.hotjar.com).

## Setup

Follow the steps below to get started.

1. Generate a new API access token (client id and secret id) on [the developers portal of Spotify](https://developer.spotify.com)
2. Clone the repository from GitHub
3. Navigate to the main application folder
4. In ./src/ create a apiConfig.js file, with the following content:
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
The main file is located at src/index.html. Styling can be added in src/styles.css and scripts in ?.

The code is compiled with ? and supports the latest ? features.

## Deployment
The latest version of the `master` branch on GitHub is auto-deployed to [URL](https://iprog2020.firebaseapp.com/trending).

