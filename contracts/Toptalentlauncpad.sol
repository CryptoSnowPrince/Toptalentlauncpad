// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.8.0-rc.1) (token/ERC20/ERC20.sol)

pragma solidity 0.8.4;

import "./ERC20.sol";
import "./Ownable.sol";

contract Toptalentlauncpad is ERC20, Ownable {
    address public burnWallet;
    address public marketingWallet;
    address public liquidityPool;

    uint256 public constant feeDenominator = 100;

    uint256 public constant burnFee = 2;
    uint256 public constant marketingFee = 2;
    uint256 public constant liquidityFee = 3;

    uint256 public pair;

    constructor() ERC20("Toptalentlauncpad", "XTTL") {
        _mint(msg.sender, 333444555 * 10**18);
    }
}
