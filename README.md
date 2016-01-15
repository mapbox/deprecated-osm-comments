# osm-comments-frontend

Frontend application to monitor changeset discussions and notes on OSM.

Uses:

  - [osm-comments-api](https://github.com/mapbox/osm-comments-api) as the API back-end
  - [osm-commets-parser](https://github.com/mapbox/osm-comments-parser) to process OSM XML files

### Setup

 - Run `npm install`
 - `npm start` to start the local dev server
 - Access `http://localhost:8080` in your browser

### Build

To build the `bundle.js` in the dist/ folder (required before deploy), make sure you have `webpack` installed. You may need to do `npm install -g webpack` if not. Then, in the project folder, just run the command `webpack`.

_Work in progress_
