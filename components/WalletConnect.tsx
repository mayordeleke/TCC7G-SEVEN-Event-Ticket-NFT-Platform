"use client";

import { useState } from "react";
import { connectWallet } from "@/lib/web3";

export default function WalletConnect() {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConnect = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const { address } = await connectWallet();
      setAddress(address);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to connect wallet";
      setError(errorMessage);
      console.error("Wallet connection error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    setAddress("");
    setError("");
  };

  return (
    <>
      {address ? (
        <button
          onClick={handleDisconnect}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
          disabled={isLoading}
        >
          Disconnect ({address.slice(0, 6)}...)
        </button>
      ) : (
        <div>
          <button
            onClick={handleConnect}
            disabled={isLoading}
            className="bg-black text-white px-4 py-2 rounded hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Connecting..." : "Connect Wallet"}
          </button>
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
      )}
    </>
  );
}