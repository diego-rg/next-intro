import Head from "next/head";
import axios from "axios";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://www.el-tiempo.net/api/json/v2/provincias/15/municipios"
  );
  return {
    props: { data },
  };
};

export default function Shop({ data }) {
  const municipios = data.municipios.map((mun) => {
    return <button className="m-4 p-2 border bg-blue-600" key={mun.NOMBRE}>{mun.NOMBRE}</button>;
  });

  console.log(data);
  return (
    <div className="bg-blue-800 text-white">
      <Head>
        <title>Shop page</title>
      </Head>
      <h3 className="font-bold text-xl">{data.title}</h3>
      <div>{municipios}</div>
    </div>
  );
}
