import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConstantPage from "../pages/HomePage/ConstantPage";
import SignUp from "../pages/LoginPage/SignUp";
import StartOrder from "../pages/OrderPage.jsx/StartOrder";
import DeliveryAddress from "../pages/OrderPage.jsx/DeliveryAddress";
import MenuPage from "../pages/MenuPage/MenuPage";
import DealPage from "../pages/DealsPage/DealPage";
import DealDetail from "../pages/DealsPage/DealDetail";
import Login from "../pages/LoginPage/Login";
import Cart from '../src/components/Cart'
import { store } from "../src/store/store"
import { Provider } from "react-redux";
import Checkout from "./components/CheckOut";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ConstantPage />,
  },
  {
    path: "/login",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/order",
    element: <StartOrder />,
  },
  {
    path: "/address",
    element: <DeliveryAddress />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/deals",
    element: <DealPage />,
  },
  {
    path: "/offer",
    element: <DealDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout/>
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default App;
