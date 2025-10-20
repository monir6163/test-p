'use client';

import dynamic from 'next/dynamic';

import '../../src/styles/globals.css';

import Loading from '@/app/loading';
import Providers from '@/providers/Providers';
import { TokenSyncProvider } from '@/providers/TokenSyncProvider';
import { useEffect, useState } from 'react';

//Dynamic imports for client-side only components
const DynamicAOSInit = dynamic(
  () => import('../providers/AOSProvider').then((mod) => mod.AOSInit),
  { ssr: false }
);
const DynamicToastProvider = dynamic(
  () => import('../providers/ToastProvider'),
  { ssr: false }
);

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <Providers>
      <TokenSyncProvider>
        <main>
          <DynamicAOSInit />
          <DynamicToastProvider />
          {children}
        </main>
      </TokenSyncProvider>
    </Providers>
  );
};

export default RootLayoutClient;
