import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import routes from "./routes.json";
import { Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.CHECKOUT} element={<Checkout />} />
    </Routes>
  );
};
export default PageRoutes;
