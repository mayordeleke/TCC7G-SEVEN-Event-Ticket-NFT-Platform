// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/Event-Ticket-NFT.sol";

contract DeployEventTicket is Script {
    function run() external {
        string memory key = vm.envString("PRIVATE_KEY");
        uint256 deployerKey = _parsePrivateKey(key);
        vm.startBroadcast(deployerKey);

        // deploy contract; owner will be the address derived from PRIVATE_KEY
        new EventTicket();

        vm.stopBroadcast();
    }

    function _parsePrivateKey(string memory key) internal pure returns (uint256) {
        bytes memory b = bytes(key);
        uint256 start = 0;
        if (b.length >= 2 && b[0] == "0" && (b[1] == "x" || b[1] == "X")) {
            start = 2;
        }

        uint256 value = 0;
        for (uint256 i = start; i < b.length; i++) {
            uint8 c = uint8(b[i]);
            uint8 nibble;
            if (c >= 48 && c <= 57) {
                nibble = c - 48;
            } else if (c >= 65 && c <= 70) {
                nibble = c - 55;
            } else if (c >= 97 && c <= 102) {
                nibble = c - 87;
            } else {
                revert("Invalid PRIVATE_KEY hex string");
            }
            value = (value << 4) | nibble;
        }
        return value;
    }
}
