import type { Metadata } from 'next';

import NextTopLoader from 'nextjs-toploader';

import Layouts from '@/common/components/layouts/index';
import { METADATA } from '@/common/constant/metadata';

import ThemeProviderContext from '../context/theme';
import './globals.css';

import { Sora } from 'next/font/google';

const soraSans = Sora({
  variable: '--soraSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800']
});

const APP_NAME = "Fauzi Portfolio";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - PWA App",
  },
  creator: 'Muhammad Fauzi Azhar',
  description: 'Personal website, portfolio, and blog of Muhammad Fauzi Azhar. A software engineer and web developer based in Indonesia.',
  authors: {
    name: 'Muhammad Fauzi Azhar',
    url: process.env.DOMAIN
  },
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/public/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={soraSans.className}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
