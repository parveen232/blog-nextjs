import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from "./navbar";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next Blog App",
    template: "%s | Next Blog App",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body>
        <div className="container">
          <Navbar />
          <main>
            <div className="content">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
