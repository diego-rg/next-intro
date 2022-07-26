import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev Newz",
  keywords: "web development, programming",
  description:
    "Página web de prueba con el framework next.js con react y tailwind css.",
};

export default Meta;
