var event = nugget.NuggetTransfer({}, '', function(error, result){
  if (!error)
    console.log("Nugget transfer: " + result.args.amount + " nuggets have been sent. Balances are  \n Sender:\t" 
	+ result.args.sender + " \t" 
	+ nugget.nuggetBalance.call(result.args.sender) 
	+ " nuggets \n Receiver:\t" + result.args.receiver 
	+ " \t" + nugget.nuggetBalance.call(result.args.receiver) + " nuggets" )
});