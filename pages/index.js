import Head from "next/head";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
