import styles from "./page.module.css";

async function getPost(postId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { postId: number };
}) {
  const post = await getPost(params.postId);
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: number } }) {
  const post = await getPost(params.postId);

  return (
    <div>
      <span className={styles["post-num"]}>Post No: {post.id}</span>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga
        facere repellat sit eos! Officiis ipsam impedit dicta et architecto,
        facere, nemo non possimus enim minus, deleniti eveniet quam quas?
        Maiores ducimus eum eveniet quam nesciunt doloribus rerum, explicabo
        amet et consequuntur itaque! Minima autem iure repellat nostrum fugiat
        eius velit, dolores officiis fuga a ipsum magnam perferendis. Id,
        deleniti. Veniam dolorem ratione nam pariatur possimus corporis illo
        praesentium magnam velit quae reprehenderit, facere veritatis cupiditate
        quis voluptate unde quo deleniti quaerat rerum libero aut voluptas a
        blanditiis cum. Quos!
      </p>
    </div>
  );
}
