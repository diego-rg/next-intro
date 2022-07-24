import Head from "next/head";

export default function Shop() {
  return (
    <div className="bg-blue-800 text-white">
      <Head>
        <title>Shop page</title>
        <meta name="description" content="Página web de blah blah blah." />
      </Head>
      <h3 className="font-bold text-xl">Buy</h3>
      <p className="text-sm">100€ buy</p>
    </div>
  );
}
