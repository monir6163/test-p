/* eslint-disable react/no-children-prop */

import RootLayoutClient from '@/layouts/RootLayout.client';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SarafCard || Customer Portal',
  description:
    'SarafCard Customer Portal is a comprehensive platform for managing and monitoring SarafCard services, providing customers with tools to oversee transactions, user accounts, and system performance efficiently.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <RootLayoutClient children={children} />
      </body>
    </html>
  );
}
