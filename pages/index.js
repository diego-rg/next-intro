import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-green-800 text-white">
      <Head>
        <title>Homepage Next Intro</title>
        <meta
          name="description"
          content="Página web de prueba con el framework next.js con react y tailwind css."
        />
      </Head>
      <h3 className="font-bold text-xl">Hola</h3>
      <p className="text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </div>
  );
}
