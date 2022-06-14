import React, { useState, useEffect } from "react";
import ListItem from "../organisms/list-item";
import Loader from "../atoms/loader";

const Template = ({ api }) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getResult() {
      const response = await api;
      setResult(response);
      setLoading(false);
    }

    getResult();
  }, []);

  return <>{loading ? <Loader /> : <ListItem data={result} />}</>;
};

export default Template;
