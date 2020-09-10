// SPDX-License-Identifier: MIT

pragma solidity 0.6.3;

contract MyContract {
  
  address public owner;

  constructor() public {
    owner = msg.sender;
	}
  
  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }
}