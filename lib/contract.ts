import { ethers } from "ethers";
import EventTicketABI from "../contract/out/Event-Ticket-NFT.sol/EventTicket.json";

export const getEventTicketContract = async() => {
    if(typeof window === "undefined") {
        throw new Error("Must be used in browser");
    }
    if(!window.ethereum) {
        throw new Error("MetaMask is not installed");
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contractAddress = process.env.NEXT_PUBLIC_EVENT_TICKET_ADDRESS;
    if(!contractAddress) {
        throw new Error("Event Ticket contract address not set in .env");
    }
    return new ethers.Contract(contractAddress, EventTicketABI.abi, signer);
};

export const mintEventTicket = async(toAddress: string, tokenURI: string) => {
    const contract = await getEventTicketContract();
    const tx = await contract.mintTicket(toAddress, tokenURI);
    return tx.wait();
};

export const burnEventTicket = async(tokenId: number) => {
    const contract = await getEventTicketContract();
    const tx = await contract.burnTicket(tokenId);
    return tx.wait();
};

export const getTicketCount = async() => {
    const contract = await getEventTicketContract();
    return await contract.ticketCount();
};

export const hasUserTicket = async(address: string) => {
    const contract = await getEventTicketContract();
    return await contract.hasTicket(address);
};