// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery{
  
   address public manager;
   address payable [] public players;

   constructor () {
      manager=msg.sender;
    }

    function enter() public payable{
       require(msg.value> .01 ether);
       players.push(payable(msg.sender));
     }

    function random() private view returns (uint) {
      return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,players)));

    }


    function pickWinner() public   {
        require(msg.sender==manager);
        uint index=random()%players.length;

        players[index].transfer(address(this).balance);
        players=new address payable[](0);
    }

    function getPlayers() public view returns (address payable[] memory) { 
         return players;
    }

    




}


  