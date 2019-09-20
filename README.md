# CryptoChain
A full stack web application depicting the decentralized blockchain network involving a cryptocurrency "CryptoChain" coin for transactions.

## *Libraries Used:*
### Frontend: [React](https://github.com/facebook/react)   
### Backend: [Express](https://github.com/expressjs/express)
### Runtime Environment: [Node](https://github.com/nodejs/node)


## *Dependencies:*
### These dependencies are required to run this project on localhost environment.
- [Node.js](https://nodejs.org/en/)
- [Redis](https://redis.io/)

## *Instructions:*
- After installing the dependencies listed above & cloning the repository, in the project directory enter `npm install` in the terminal to install the required modules.
- After this, enter `npm run start` to start the project on the root node (i.e. PORT:3000).
- To start different peers/nodes in the network, enter `npm run start-peer` in the command-line/terminal & the server is started on a random PORT which can be noted from the command-line/terminal stating `listening on PORT:3XXX`.


## *Roadmap & Issues:*
- An authentication to access the front-end i.e. signup/login portal. On a successfull signup, user will recieve some cryptochain coins as a reward to maintain the currency flow.
- Currently, everything is synced to the root node, i.e. the network isn't still fully decentralised. A way around for this is that if some nodes start, they would publish their addresses & then when another node starts, it would fetch all the active nodes & try to sync with all of them not with root node only.
- Currently, the blockchain completely lives in the JavaScript memory. Luckily, as long as there is one node in the system running, a copy of the current blockchain is stored. But if all nodes go down, the blockchain progress will die. One solution is to implement blockchain backups by adding a feature to download the blockchain to the file system. A straightforward option is to download the blockchain as json. The benefit is quicker synchronization on startup for new peers, as well as restoring lost data if the JavaScript memory somehow loses the blockchain.
- Unknown behaviour in the case of 51% attack & in the case of generation of orphaned blocks.
- Replace the polling logic in the transaction pool with real-time updates through socket.io. Continually polling the pool, even when there haven’t been any updates, could be overkill and eventually overload the server. But using socket.io for real-time updates is an alternate and more clean solution.
- Using Redux to handle many front-end issues.
- This challenge is to implement a solution to a possible attack vector which tracks a public key’s usage throughout many transactions, and attempts to decrypt its private key. A solution to this, is to implement a wallet, that creates a fresh set of keys on every transactions. It’s a lot more overhead - but perhaps more secure.
- Beef up the proof-of-work algorithm by significantly increasing the MINING_RATE. Display real-time feedback of the proof-of-work algorithm in the frontend (socket.io could come in handy).
- To get servers communicating, they are all connecting to the same redis server. This has a limited number of connections. A solution is implement a cluster of redis urls as the connections increase. That way, a different redis server can handle other servers. The key is making sure that each redis server itself, communicates with each other, in a cluster fashion.
