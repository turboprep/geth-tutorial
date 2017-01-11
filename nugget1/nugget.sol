contract nugget { 
    mapping (address => uint) public nuggetBalance;
    event NuggetTransfer(address sender, address receiver, uint amount);

  /* Initializes contract with initial supply tokens to the creator of the contract */
  function nugget(uint supply) {
        nuggetBalance[msg.sender] = supply;
    }

  /* Very simple trade function */
    function sendNugget(address receiver, uint amount) returns(bool sufficient) {
        if (nuggetBalance[msg.sender] < amount) return false;
        nuggetBalance[msg.sender] -= amount;
        nuggetBalance[receiver] += amount;
        NuggetTransfer(msg.sender, receiver, amount);
        return true;
    }
}