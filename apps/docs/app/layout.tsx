import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Zomato Gather",
  description: "A platform to connect food lovers with local chefs and vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey="pk_test_d2lyZWQtYmxvd2Zpc2gtMTQuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <html lang="en">
        <body className={` antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
