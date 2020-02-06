# housing company

this is demo project for housing company

## Motivation
this is Demo project


[![Build Status](https://travis-ci.com/ejukka/housing-company.svg?branch=master)](https://travis-ci.com/ejukka/housing-company)
 ![npm](https://img.shields.io/node/v/11)  [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)


#### Prerequisite 

 - [Yarn](https://yarnpkg.com/getting-started/install) 
 - [Node](https://nodejs.org/en/download/)
 - [Google maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
 - [Firebase API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

### environment setup
- ```yarn install```
- ```yarn run create```
    - it will create `.env`-file on the root of the project 
    - place your Google API KEY on ```REACT_APP_GOOGLE_MAPS_KEY=this_is_my_seacred_api_key```
    - ìt will also create `script.js`-file on `public-folder`.
    - Add your Google API key also on created `script.js`-file.
    
##### Configure following firebase ids to your .evn file:
```
REACT_APP_API_KEY=apikey,
REACT_APP_AUTH_DOMAIL=test-domain,
REACT_APP_DATABSE_URL=test,
REACT_APP_PROJECT_ID=test,
REACT_APP_STORAGE_BUCKET=test,
REACT_APP_MESSAGGIGN_SENDER_ID=test,
REACT_APP_APP_ID=test
```

##### Configure also following texts to your .evn file:`
[texts](fields.txt)


### start project
 ```yarn start```

### unit testing
  ```yarn jest```

### integration testing
 - ```yarn start```
 - ```yarn cypress run```


