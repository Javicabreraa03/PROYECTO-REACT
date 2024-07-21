import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ProductsContextProvider from "./context/unusedContext/ProductsContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeContextProvider> */}
      {/* <UserContextProvider> */}
        {/* <ProductsContextProvider> */}
          {/* <CartContextProvider> */}
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
          {/* </CartContextProvider> */}
        {/* </ProductsContextProvider> */}
      {/* </UserContextProvider> */}
    {/* </ThemeContextProvider> */}
  </React.StrictMode>
);
