import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Main from "./pages/Main"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"

import "./assets/styles/main.sass"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  }
])

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
