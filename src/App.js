import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";
import AppRoutes from './routes/';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
