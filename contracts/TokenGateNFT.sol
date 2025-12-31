// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenGateNFT is ERC721, Ownable {
    uint256 public constant MAX_SUPPLY = 1000;
    uint256 public totalMinted;

    constructor()
        ERC721("TokenGate Access Pass", "TGAP")
        Ownable(msg.sender)
    {}

    function mint(address to) external onlyOwner {
        require(totalMinted < MAX_SUPPLY, "Max supply reached");
        totalMinted++;
        _safeMint(to, totalMinted);
    }

    function hasAccess(address user) external view returns (bool) {
        return balanceOf(user) > 0;
    }
}
