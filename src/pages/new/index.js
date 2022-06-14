import Template from "../../components/template";
import { API } from "../../services/api";

const New = () => {
  return (
    <>
      <Template api={API.new()} />
    </>
  );
};

export default New;