# Multichain-node-API
This repository contains Some API's through which you can directly connect with your multichain server. You can directly use this file to connect to a multichain node, initialise it, carry on some transactions and fetch balance.

How to use?
Installing MultiChain – Windows

Download http://www.multichain.com/download/multichain-windows-1.0-alpha-27.zip and extract its contents to your chosen directory. For better understanding please install multichain on two different servers.

Next steps

Once MultiChain is installed, you can proceed with the following steps:
 Creating a blockchain

First we will create a new blockchain named chain1. On the first server, run this command:

multichain-util create chain1

View the blockchain’s default settings (these can also be modified but we recommend using the defaults for now):

cat ~/.multichain/chain1/params.dat

Initialize the blockchain, including mining the genesis block:

multichaind chain1 -daemon

You should be told that the server has started and then after a few seconds, that the genesis block was found. You should also be given the node address that others can use to connect to this chain.

Copy and paste the node address here: 
chain1@[ip-address]:[port]

2. Connecting to a blockchain

Now we’ll connect to this blockchain from elsewhere. On the second server, run the following:

multichaind chain1@[ip-address]:[port]

You should be told that the blockchain was successfully initialized, but you do not have permission to connect. You should also be shown a message containing an address in this node’s wallet.

Copy and paste the wallet address here: 
1...

Back on the first server, add connection permissions for this address:

multichain-cli chain1 grant 1... connect

Now try reconnecting again from the second server:

multichaind chain1 -daemon

You should be shown a message that the node was started, and it should display this second node’s address.

Download this file on your system. Run npm install to download all dependent node modules. 
then open connection.js file and fill in your details. 
just run the connection file nce u have filled your details.
