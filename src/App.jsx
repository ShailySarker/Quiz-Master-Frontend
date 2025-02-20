import { BrowserRouter } from "react-router";
import Routers from "./routes/Routers";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;