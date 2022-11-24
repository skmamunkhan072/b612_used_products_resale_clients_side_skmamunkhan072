import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Components/Routes/Routes/Routes";
import Toaster from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
