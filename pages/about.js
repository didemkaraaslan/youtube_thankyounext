import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/react.svg" />
      </Head>

      <h1 className="bigText greenColor">About</h1>
      <style jsx>{`
        .greenColor {
          color: green;
        }

        .redColor {
          color: red;
        }

        .bigText {
          font-size: 156px;
        }
      `}</style>
    </>
  );
}
