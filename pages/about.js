import Head from "next/head";

export default function About() {
  return (
    <div className="w-96 h-96 bg-red-800 text-white">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="About da paxina blah." />
      </Head>
      <h1 className="font-bold text-xl">About</h1>
      <p className="text-sm">blah blah blah</p>
    </div>
  );
}
