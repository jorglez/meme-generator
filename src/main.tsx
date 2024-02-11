import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home/Home.tsx";
import About from "./screens/about/About.tsx";
import ErrorPage from "./screens/error/ErrorPage.tsx";
import Creator from "./screens/creator/Creator.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "./global.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { element: <Home />, index: true },
          { path: "/about", element: <About /> },
          { path: "/create", element: <Creator /> },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>
);
