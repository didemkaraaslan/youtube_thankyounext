import Head from "next/head";
import Link from "next/link";
import { URL } from "../../environment/index";

export default function Videos({ videos }) {
  return (
    <div>
      <Head>
        <title>Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {videos.map((video) => (
        <Link key={video.id} href={`/videos/${video.id}`}>
          <a>{video.name}</a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${URL}/api/videos`);
  const videos = await res.json();

  return {
    props: {
      videos,
    },
  };
};
