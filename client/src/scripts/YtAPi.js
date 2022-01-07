
import { gapi } from 'gapi-script';

export function authenticate () {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
export function loadClient() {
    gapi.client.setApiKey("AIzaSyDM7nHNNDiC1UqfEoTev7UBRrFSbRH6RAY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
export function execute () {
    return gapi.client.youtube.subscriptions.list({
      "part": [
        "snippet,contentDetails"
      ],
      "forChannelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      "mine": true
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                return response
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "946260688350-qvla8d05taeh446circernf772ddcesv.apps.googleusercontent.com"});
  });

export function checkSubscription (res) {

  if (res.result.items.length === 0) {
    return false
  } else {
    return true
  }
}



