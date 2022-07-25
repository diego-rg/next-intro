import Municipio from "./Municipio";

const Municipios = ({ data }) => {
  const municip = data.municipios.map((municipio) => {
    const municipID = (municipio.CODIGOINE).slice(0, -6)

    return <Municipio municipio={municipio} municipID={municipID} key={municipID} />;
  });

  return (
    <div className="bg-blue-800 text-white">
      <h3 className="font-bold text-xl">{data.title}</h3>
      {municip}
    </div>
  );
};
export default Municipios;
