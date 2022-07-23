import Head from "next/head";

export default function Home() {
  return (
    <div className="w-96 h-96 bg-black text-white">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Página web de blah blah blah." />
      </Head>
      <h1 className="font-bold text-xl">Hola</h1>
      <p className="text-sm">Boassssssssssss</p>
    </div>
  );
}
