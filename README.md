# MAIL BOX

A web aplpication which fetches mails using the 
[Gmail API](https://developers.google.com/gmail/api).

To run this application you will need the following prerequisites
- [Node js](https://nodejs.org/en/download/) - [Here](https://phoenixnap.com/kb/install-node-js-npm-on-windows) is an installation guide
- A Google Cloud Platform project with the API enabled. To create a project and enable an API, refer to [Create a project and enable the API](https://developers.google.com/workspace/guides/create-project)
***Note that for this apllication, you should enable the Gmail API***
- A Google account with Gmail enabled


### Set Up
1. Download and exract the zip file or clone this repo
2. In the file ```javascript/keys.js``` replace ```<YOUR_CLIENT_ID>``` with the client ID you created.
3. Also replace  ```<YOUR_API_KEY>``` with the API key you created.

### Run 
1. Navigate to the directory ```Mail-Box``` in the downloaded code.
2. Install node modules
    ```npm install``` 
3. Start the application
    ```node app.js```
4. Navigate to ```http://localhost:8887/mail-box``` in your browswer

### Features supported
1. Fetch mails sorted by date
2. Fetch inbox, unread, and sent mails
2. Send mails with plain text content

### Demo of set up and working
[Video](https://drive.google.com/file/d/1SbXe54R80KhGswUbs0O6aVoLqLnzOKtA/view?usp=sharing)

### References
- [Quickstart JS](https://developers.google.com/gmail/api/quickstart/js)
