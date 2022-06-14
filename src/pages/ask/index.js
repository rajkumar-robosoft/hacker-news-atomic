import Template from "../../components/template";
import { API } from "../../services/api";

const Ask = () => {
  return (
    <>
      <Template api={API.ask()} />
    </>
  );
};

export default Ask;