import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Parveen Kumar</h1>
        <p>Hey, I&apos;m Parveen. I&apos;m a Jr Software Developer.</p>
        <p>
          I&apos;m currently learning React.js and Next.js and curious about
          software development technologies.
        </p>
        <div className={styles.links}>
          <Link
            href="https://github.com/parveen232"
            className={styles.link}
            target="_blank"
          >
            My GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
