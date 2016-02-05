# osm-comments-frontend

Frontend application ([running here](https://www.mapbox.com/osm-comments)) to monitor changeset discussions and notes on OSM.

Choose 'changesets' or 'notes' in the top selector, and use the search box to filter the conversations in various ways. For example:

* `users:"Harry Wood"` to find conversations by a specified OSM user ([try it](https://www.mapbox.com/osm-comments/#/notes/?q=users:%22Harry%20Wood%22))
* `bbox:0.3021,51.7253,-0.5576,51.2550` to find conversations happening with the London bounding box ([try it](https://www.mapbox.com/osm-comments/#/notes/?q=bbox:0.3021,51.7253,-0.5576,51.2550))

[All filter options documented here](https://github.com/mapbox/osm-comments-api/blob/master/API.md)

## Development

OSM Comments uses:

  - [osm-comments-api](https://github.com/mapbox/osm-comments-api) as the API back-end
  - [osm-commets-parser](https://github.com/mapbox/osm-comments-parser) to process OSM XML files

### Setup

 - Run `npm install`
 - `npm start` to start the local dev server
 - Access `http://localhost:8080` in your browser

### Build

To build the `bundle.js` in the dist/ folder (required before deploy), make sure you have `webpack` installed. You may need to do `npm install -g webpack` if not. Then, in the project folder, just run the command `webpack`.

_Work in progress_
