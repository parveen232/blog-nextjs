import "./globals.css";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

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
          <div className="sidebar">
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/posts">all posts</Link>
          </div>
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
