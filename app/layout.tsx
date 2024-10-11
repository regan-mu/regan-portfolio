import type { Metadata } from "next";
import "./globals.css";
import { ContextWrapper } from "./context/AppContext";

export const metadata: Metadata = {
  title: "Regan Muthomi",
  description: "Software with over 3 years of experience building scalable software solutions at a high level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkBg flex justify-center items-center">
        <ContextWrapper>
        {children}
        </ContextWrapper>
        </body>
    </html>
  );
}
