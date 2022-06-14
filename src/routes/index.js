import MyRoutes from "./my-routes";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      {MyRoutes.map((item, index) => (
        <Route
          {...item}
          key={index}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
