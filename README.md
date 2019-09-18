# This is project for housing company

### environment setup
- yarn install
- create .env-file on the root of the project and place Google API KEY there

- REACT_APP_GOOGLE_MAPS_KEY=this_is_my_seacred_api_key

##### Configure also following firebase ids to your .evn file:
- REACT_APP_API_KEY=apikey,
- REACT_APP_AUTH_DOMAIL=test-domain,
- REACT_APP_DATABSE_URL=test,
- REACT_APP_PROJECT_ID=test,
- REACT_APP_STORAGE_BUCKET=test,
- REACT_APP_MESSAGGIGN_SENDER_ID=test,
- REACT_APP_APP_ID=test

## Create following script.js file to your public folder

var script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=APIKEY";
document.head.appendChild(script);

### start project
yarn start
