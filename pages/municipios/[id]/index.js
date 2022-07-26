import { useRouter } from "next/router";

const indexMunici = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h5>Municipio</h5>
      <p>Esto es el municipio {id}</p>
    </div>
  );
};

export default indexMunici;
