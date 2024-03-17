import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    template:"%s // Sircle test",
    default: "doesn't' exist metadata",
  },
};



export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="bg-BackgroundBlack">
        <div>
          <Navigation/>
          {children}
        </div>
      </body>
    </html>
  );
}
