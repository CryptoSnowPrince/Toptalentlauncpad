//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

abstract contract Auth {
	address public owner;
	mapping(address => bool) internal authorizations;

	constructor() {
		owner = msg.sender;
		authorizations[msg.sender] = true;
	}

	modifier onlyOwner() {
		require(isOwner(msg.sender), "!OWNER");
		_;
	}

	modifier authorized() {
		require(isAuthorized(msg.sender), "!AUTHORIZED");
		_;
	}

	function authorize(address adr) public authorized {
		authorizations[adr] = true;
	}

	function unauthorize(address adr) public authorized {
		authorizations[adr] = false;
	}

	function isOwner(address account) public view returns (bool) {
		return account == owner;
	}

	function isAuthorized(address adr) public view returns (bool) {
		return authorizations[adr];
	}

	function transferOwnership(address payable adr) public authorized {
		owner = adr;
		authorizations[adr] = true;
		emit OwnershipTransferred(adr);
	}

	function renounceOwnership() public authorized {
		address dead = 0x000000000000000000000000000000000000dEaD;
		owner = dead;
		emit OwnershipTransferred(dead);
	}

	event OwnershipTransferred(address owner);
}