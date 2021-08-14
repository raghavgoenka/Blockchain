// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
       
        
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor  (uint minimum)  {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false
          
        });

        requests.push(newRequest);
    }

    
  

    
}