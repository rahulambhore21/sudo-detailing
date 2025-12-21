'use client'
import Homepage from "@/components/Homepage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [metaMaskAvailable, setMetaMaskAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if MetaMask is available
    const checkMetaMask = () => {
      if (typeof window !== 'undefined') {
        const isAvailable = !!(window as any).ethereum?.isMetaMask;
        setMetaMaskAvailable(isAvailable);
      }
    };

    checkMetaMask();
  }, []);

  if (metaMaskAvailable === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-xl font-bold mb-4">MetaMask Required</h2>
        <p className="text-center mb-4">
          Please install MetaMask extension to use this application.
        </p>
        <a 
          href="https://metamask.io/download/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Install MetaMask
        </a>
      </div>
    );
  }

  return (
    <div>
      <Homepage/>
    </div>
  );
}
