import axios from "axios";

//usa inicion de codigo ine, 5 cifras sin ceros del final
export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://www.el-tiempo.net/api/json/v2/provincias/15/municipios/15013"
  );
  return {
    props: { data },
  };
};

export default function About({ data }) {
  return (
    <div className="bg-red-800 text-white">
      <h3>{data.municipio.NOMBRE}</h3>
      <p>Temperatura: {data.temperatura_actual}</p>
      <p>Mínima: {data.temperaturas.min}</p>
      <p>Máxima: {data.temperaturas.max}</p>
    </div>
  );
}
