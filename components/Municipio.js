import Link from "next/link";

const Municipio = ({ municipio, municipID }) => {
  return (
    <div className="bg-blue-800 text-white">
      <Link href="/municipios/[id]" as={`/municipios/${municipID}`}>
        {municipio.NOMBRE}
      </Link>
    </div>
  );
};
export default Municipio;
