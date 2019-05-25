# Interaction Channel

This dapp allows to interact with a deployed contract through the web front end ui. This dapp works only with a client wallet and is restrained to MetaMask. The user simply logs in through MetaMask and can input a message send as an byte32 value. The application lists all sent messages that are emitted by the contract and each new message will be prepended to the list. This dapp is built using express 4.17.0 and consists of a simple index.html and its respective css and js files. The assignment was posed by Rajeev Sakhuja in section 5 in the course [Ethereum: Decentralized Application Design and Development](https://www.udemy.com/ethereum-dapp/) at [Udemy](https://www.udemy.com).

Unfortunately, the user needs to refresh the site such that the block number of the sent messages will be displayed. This minor issue will be resolved in a different project named Mana enlisted in my repositories.

To use the repository simply download or fork this project. In the terminal you can simply go to the folder "assignment" and run __node index.js__. The dapp runs in http://localhost:4500. Use google chrome as with firefox the "SHOW DESCRIPTION" button does not display the description.

The assignment by Rajeev Sakhuja consists in
```

Exercise: Create a front end application for the InteractionChannel.sol

Coding exercise:

The InteractionChannel.sol contract was discussed in one of the past lectures. Use web3 for creating a DAPP. Here are the steps you will need to follow:

    1. Deploy the contract 
    2. Copy the address & ABI Definition into a JSON/Text file
    3. Use your favorite Javascript library to create a Web Front End (UI) for your Contract.
       a. Decide on tools that you would use for creating the Single page application
            i.  Javascript Libraries
            ii. Framework e.g., Angular, JQuery, 
            iii.Tools e.g., Yoeman webapp generator as explained in lectures in this section
       b. Add the file created in #2 to the UI project. For contract ionChannelions you would need to use the content in this file
       c. Use appropriate web3 API to Read the account information from provider (geth/MetaMask) & display it on the front end
       d. Provide a way for the user to ionChannel. E.g., you may create a text box where the user can put in some message.
       e. Start the contract event watch - display the events received. 
            i.  Create a UI component that will  show messages in a friendly way
            ii. Start an event listener using the web3 events API
```