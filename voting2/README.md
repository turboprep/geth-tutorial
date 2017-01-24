-------------------
Instructions
-------------------

1. (a) Initialize genesis block using init v1.json
1. (b) Run newaccount.bat twice to create new accounts

2. (a) Start console using mine.bat
2. (b) Monitor output of get.log (e.g. use tail -f in Linux or more in DOS) to check whether DAG generation is complete, and mining has begun

3. Unlock account
	personal.unlockAccount(eth.accounts[0])

4. Deploy contract
	loadScript('ballot.js');

5. Wait for deployment to finish

6. Vote for rightwing candidate
	ballot.vote(1);

7. Wait for a few seconds for transaction to register on blockchain

6. Check winner
	web3.toUtf8(ballot.winnerName());
