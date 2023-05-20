"use client";
import "./globals.css";
import Link from "next/link";

export default function Navbar() {
  function handleClick(el: any) {
    const links = document.querySelectorAll(".link");
    for (let link of links) {
      if (link.classList.contains("active")) {
        link.classList.remove("active");
      }
    }
    el.classList.add("active");
  }
  return (
    <nav>
      <div className="navbar">
        <Link
          href="/"
          onClick={(e) => handleClick(e.target)}
          className="link active"
        >
          home
        </Link>
        <Link
          href="/about"
          onClick={(e) => handleClick(e.target)}
          className="link"
        >
          about
        </Link>
        <Link
          href="/posts"
          onClick={(e) => handleClick(e.target)}
          className="link"
        >
          all posts
        </Link>
      </div>
    </nav>
  );
}
