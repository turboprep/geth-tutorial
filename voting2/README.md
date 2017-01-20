1. Initialize genesis block using init v1.json

2. Start console using console.bat

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
