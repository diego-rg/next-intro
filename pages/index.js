import axios from "axios";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://api-diccionarioprogramacion.herokuapp.com/api/terms/categories"
  );
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const datosApi = data.categories.map((cat) => {
    return (
      <li className="bg-orange-300" key={cat}>
        {cat}
      </li>
    );
  });

  return (
    <div className="bg-green-800 text-white">
      <h3 className="font-bold text-xl">Hola</h3>
      <h4 className="bg-orange-500 text-center">Datos API</h4>
      <ul className="p-4">{datosApi}</ul>
      <p className="text-sm">
        Lorem Ipsum is Next Intro Test simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Header Intro Next Test
      </p>
      <p className="text-sm">
        Lorem Ipsum is Homepage Next Intro simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
