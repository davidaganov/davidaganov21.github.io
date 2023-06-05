import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"

import { HomeView, ProjectView } from "./views"

import "./services/i18n"
import "./assets/styles/main.sass"
import "swiper/css"

const router = createHashRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/:name",
    element: <ProjectView />
  }
])

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
