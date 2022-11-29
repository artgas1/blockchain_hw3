// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GasparyanToken is ERC20, Ownable {
    constructor() ERC20("GasparyanToken", "GAT") {
        _mint(msg.sender, 300000 * 10**decimals());
    }

    function testSum() public view returns (int256) {
        return 2 + 2;
    }
}
