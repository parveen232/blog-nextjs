import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

async function getAllPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export const metadata: Metadata = {
  title: "All Posts",
  description: "Welcome to Next.js",
};

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>All Posts</h1>
      <div className={styles.container}>
        {posts.map((post: { id: number; title: string }) => (
          <div key={post.id} className={styles.item}>
            <span>{post.id}.</span>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
