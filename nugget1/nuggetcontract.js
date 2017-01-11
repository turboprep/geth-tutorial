var supply = 10000 ;

var nuggetContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"nuggetBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendNugget","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"supply","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"receiver","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"NuggetTransfer","type":"event"}]);

var nugget = nuggetContract.new(
   supply,
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052346100005760405160208061033a833981016040528080519060200190919050505b80600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b6102be8061007c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632c4f732714610049578063f8e3aa9214610090575b610000565b346100005761007a600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506100e4565b6040518082815260200191505060405180910390f35b34610000576100ca600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506100fc565b604051808215151515815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b600081600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561014e576000905061028c565b81600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f603e2f6c34465f0bdc264ec1ce1a3f34c614256323562e33a331fa0d852f3e30338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b929150505600a165627a7a72305820b327e0a03ba3e0b912090e9827c7a11fb52d88f12aae1a8977d72ec88a30c2970029', 
     gas: '1000000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract deployed! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    } else {
		console.log("Contract transaction sent: TransactionHash: " + contract.transactionHash + " waiting to be deployed ...");
	}
 })