import Template from "../../components/template";
import { API } from "../../services/api";

const Best = () => {
  return (
    <>
      <Template api={API.best()} />
    </>
  );
};

export default Best;