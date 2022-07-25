import Head from "next/head";
import axios from "axios";

import Municipios from "../components/Municipios";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://www.el-tiempo.net/api/json/v2/provincias/15/municipios"
  );

  return {
    props: { data },
  };
};

export default function Shop({ data }) {
  return (
    <div className="bg-green-800 text-white">
      <Head>
        <title>Homepage Next Intro Test</title>
      </Head>
      <Municipios data={data} />
    </div>
  );
}
