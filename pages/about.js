import Head from "next/head";

export default function About() {
  return (
    <div className="bg-red-800 text-white">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="About da paxina blah." />
      </Head>
      <h3 className="font-bold text-xl">About</h3>
      <p className="text-sm">blah blah blah</p>
    </div>
  );
}
