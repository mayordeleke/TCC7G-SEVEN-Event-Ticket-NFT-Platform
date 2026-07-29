// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/Event-Ticket-NFT.sol";

contract EventTicketTest is Test {
    EventTicket ticket;
    address owner = address(0xABCD);
    address user = address(0xBEEF);

    function setUp() public {
        vm.prank(owner);
        ticket = new EventTicket();
    }

    function testOwnerCanMint() public {
        vm.prank(owner);
        ticket.mintTicket(user, "ipfs://ticket1");

        assertEq(ticket.ticketCount(), 1);
        assertTrue(ticket.hasTicket(user));
        assertEq(ticket.ownerOf(1), user);
    }

    function testNonOwnerCannotMint() public {
        vm.prank(user);
        vm.expectRevert();
        ticket.mintTicket(user, "ipfs://x");
    }

    function testCannotMintTwiceForSameAddress() public {
        vm.prank(owner);
        ticket.mintTicket(user, "ipfs://1");

        vm.prank(owner);
        vm.expectRevert(bytes("Address already owns a ticket"));
        ticket.mintTicket(user, "ipfs://2");
    }

    function testBurnByOwner() public {
        vm.prank(owner);
        ticket.mintTicket(user, "ipfs://1");

        vm.prank(user);
        ticket.burnTicket(1);

        vm.expectRevert();
        ticket.ownerOf(1);
    }

    function testBurnByApproved() public {
        vm.prank(owner);
        ticket.mintTicket(user, "ipfs://1");

        vm.prank(user);
        ticket.approve(owner, 1);

        vm.prank(owner);
        ticket.burnTicket(1);

        vm.expectRevert();
        ticket.ownerOf(1);
    }

    function testBurnUnauthorizedReverts() public {
        vm.prank(owner);
        ticket.mintTicket(user, "ipfs://1");

        vm.prank(address(0xCAFE));
        vm.expectRevert(bytes("Not owner nor approved"));
        ticket.burnTicket(1);
    }
}
