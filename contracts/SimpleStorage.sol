// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/math/Math.sol";

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }

    function add(uint256 x) public {
        (bool success, uint256 result) = Math.tryAdd(storedData, x);
        require(success, "Addition overflow");
        storedData = result;
    }
}