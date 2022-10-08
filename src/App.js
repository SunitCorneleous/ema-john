import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Shop></Shop> },
        {
          path: "/shop",
          element: <Shop></Shop>,
          loader: () => fetch("products.json"),
        },
        {
          path: "/order",
          element: <Order></Order>,
          loader: productsAndCartLoader,
        },
        { path: "/inventory", element: <Inventory></Inventory> },
        { path: "/*", element: <h1>Page not found</h1> },
      ],
    },
    {
      path: "/about",
      element: <About></About>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
