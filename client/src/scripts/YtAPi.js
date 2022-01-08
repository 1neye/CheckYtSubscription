
import { gapi } from 'gapi-script';

export function authenticate () {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
export function loadClient() {
  console.log(process.env)
    gapi.client.setApiKey(`${process.env.REACT_APP_API_KEY}`);
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
      "forChannelId": "UCaR4U-N4qZIiwUOAPRMyvBw",
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
    gapi.auth2.init({client_id: `${process.env.REACT_APP_CLIENT_ID}`});
  });

export function checkSubscription (res) {

  if (res.result.items.length === 0) {
    return false
  } else {
    return true
  }
}



