import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { geistMono, geistSans } from "../utils/fonts";
import "../utils/icons";


export const metadata: Metadata = {
  title: "WowUp JSC - Phát triển công nghệ, kiến tạo thành công",
  icons: { icon: "/logoFT1.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 
