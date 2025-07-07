"use client";

import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/tonconnect-manifest.json'
  : 'https://tonportal.xyz/tonconnect-manifest.json';

export function TonConnectProvider({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
} 