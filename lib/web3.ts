import { ethers } from "ethers";

export const connectWallet = async () => {
  if (!window.ethereum) throw new Error("MetaMask is not installed");

  const provider = new ethers.BrowserProvider(window.ethereum);

  let accounts: string[] = [];

  try {
    accounts = await provider.send("eth_accounts", []);
  } catch (err) {
    console.warn("Failed to query eth_accounts:", err);
  }

  if (!accounts || accounts.length === 0) {
    try {
      accounts = await provider.send("eth_requestAccounts", []);
    } catch (err: any) {
      if (err?.code === -32002 || err?.message?.includes("already pending")) {
        throw new Error(
          "A wallet permission request is already pending. Please approve or reject the existing request in your wallet and then try again."
        );
      }
      throw err;
    }
  }

  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  return { provider, signer, address };
};