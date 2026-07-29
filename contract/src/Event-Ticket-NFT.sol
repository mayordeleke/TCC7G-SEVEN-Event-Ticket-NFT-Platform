// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import OpenZeppelin libraries
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Event Ticket NFT Platform
/// @notice Each ticket is minted as an ERC721 NFT with metadata URI
contract EventTicket is ERC721URIStorage, Ownable {
    uint256 public ticketCount; // total tickets minted

    // Optional: mapping to track if an address already owns a ticket
    mapping(address => bool) public hasTicket;

    constructor() ERC721("EventTicket", "ETK") Ownable(msg.sender) {}

    /// @notice Mint a new ticket NFT
    /// @param to Address that will receive the ticket
    /// @param tokenURI Metadata URI (e.g. IPFS link)
    function mintTicket(address to, string memory tokenURI) public onlyOwner {
        require(!hasTicket[to], "Address already owns a ticket");

        ticketCount++;
        _mint(to, ticketCount);
        _setTokenURI(ticketCount, tokenURI);

        hasTicket[to] = true;
    }

    /// @notice Burn a ticket (e.g. if refunded or invalidated)
    /// @param tokenId ID of the ticket to burn
    function burnTicket(uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(_isAuthorized(owner, msg.sender, tokenId), "Not owner nor approved");
        _burn(tokenId);
    }
}
