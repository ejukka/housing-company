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


##### Configure also following texts to your .evn file:
- REACT_APP_APP_headerText='Housing company name'
- REACT_APP_APP_headerTextAdmin='ADMIN - Housing company name- ADMIN'

- REACT_APP_APP_link1Text='First link'
- REACT_APP_APP_link1='https://duckduckgo.com/'
- REACT_APP_APP_link2Text='Second link'
- REACT_APP_APP_link2='https://duckduckgo.com/'
- REACT_APP_APP_link3Text='Third link'
- REACT_APP_APP_link3='https://duckduckgo.com/'
- REACT_APP_APP_link4Text='Fourth link'
- REACT_APP_APP_link4='https://duckduckgo.com/'
- REACT_APP_APP_link5Text='Fifth link'
- REACT_APP_APP_link5='https://duckduckgo.com/'
- REACT_APP_APP_link6Text='Six link'
- REACT_APP_APP_link6='https://duckduckgo.com/'
- REACT_APP_MENU_TITLE1='Test title1'
- REACT_APP_MENU_TITLE1_LINK=''
- REACT_APP_MENU_TITLE2='Test title 2'
- REACT_APP_MENU_TITLE2_LINK=''

## Create following script.js file to your public folder

var script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=APIKEY";
document.head.appendChild(script);

### start project
yarn start
