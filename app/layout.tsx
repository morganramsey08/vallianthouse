'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from 'next/navigation';
import GlobalFooter from '@/app/components/footer/footer';

import Navigation from '@/app/components/navigation/Navigation';
import HomeNavigation from '@/app/components/navigation/home-navigation';

import '../styles/globals.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {isHome ? <HomeNavigation /> : <Navigation />}
        <main className="flex-1">{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
}
