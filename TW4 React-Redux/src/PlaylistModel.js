import * as apiConfig from './apiConfig.js'

  /*
  export function isInMenu(dish, dishes) {
    return dishes.some(d => d.id === dish.id);
  }

  export function getSortedMenu(dishes) {
    return dishes.sort((a, b) =>
              this.computeDishIndex(a) - this.computeDishIndex(b));
  }
  */

  export function getSongDetails(dish_id) {
    //return retrieve(`recipes/${dish_id}/information`);
    //TODO FILL IN
  }

  export function getPlaylistSummary(songs) {
    //get some info about all the songs in the playlist
  }

  export function searchPlaylist(name) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    name = name || "37i9dQZEVXbMDoHDwVN2tF";

    return retrieve(name).then(data => data.items); // leave out the unimportant parts of the response data
  }

  export function retrieve(query) {
    const payload = clientID+":"+secretID;
    const encodedPayload = new Buffer(payload).toString("base64");

    let access_token = "";

    const controller = new AbortController();
    const token = fetch(apiConfig.tokenENDPOINT, {
      method: "POST",
      headers: {
        'Authorization': "Basic" + encodedPayload
      },
      body: {
        "grant_type": "client_credentials"
      },
      redirect: "follow"
    })
    .then(response => response.json())   // from headers to response data
    .catch(error => console.error(error.message));
    token.abort = () => controller.abort();

    async function getSong() {
      let wait = await token.then(result => access_token = result.access_token);

      let playlist = fetch(apiConfig.playlistENDPOINT + query + '/tracks', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + access_token
        }
      }).then(response => {
        return response.json();
      });

      return playlist;
    }

    return getSong();
  }
