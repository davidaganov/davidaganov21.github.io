import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"

import { HomeView, ProjectView, ResumeView } from "./views"
import { GlobalProvider } from "./store/Context"

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
  },
  {
    path: "/resume",
    element: <ResumeView />
  }
])

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
)
