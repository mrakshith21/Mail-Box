# MAIL BOX

A simple web aplpication which fetches mails using the 
[Gmail API](https://developers.google.com/gmail/api).

To run this application you will need the following prerequisites
- [Node js](https://nodejs.org/en/download/) - [Here](https://phoenixnap.com/kb/install-node-js-npm-on-windows) is an installation guide
- A Google Cloud Platform project with the API enabled. To create a project and enable an API, refer to [Create a project and enable the API](https://developers.google.com/workspace/guides/create-project)
***Note that for this apllication, you should enable the Gmail API***
- A Google account with Gmail enabled

After enabling the Gmail API you will get authorization codes
called the CLIENT_ID and API_KEY

### Set Up
1. Download and exract the zip file or clone this repo
2. In the file ```app.js``` replace ```<YOUR_CLIENT_ID>``` with the client ID you created.
3. Also replace  ```<YOUR_API_KEY>``` with the API key you created.

### Run 
1. Navigate to the directory ```Mail-Box``` in the downloaded code.
2. Run the following command in the terminal to start the application
    ```node app.js```
3. Navigate to ```http://localhost:8887/mail-box``` in your browswer

