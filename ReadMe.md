# Interaction Channel

This dapp allows to interact with a deployed contract through the web front end ui. This dapp works only with a client wallet and is restrained to MetaMask. The user simply logs in through MetaMask and can input a message send as an byte32 value. The application lists all sent messages that are emitted by the contract and each new message will be prepended to the list. This dapp is built using express 4.17.0 and consists of a simple index.html and its respective css and js files.

Unfortunately, the user needs to refresh the site such that the block number of the sent messages will be displayed. This minor issue will be resolved in a different project named Mana enlisted in my repositories.

To use the repository simply download or fork this project. In the terminal you can simply go to the folde "assignment" and run __node app.js__. The dapp runs in http://localhost:4500.