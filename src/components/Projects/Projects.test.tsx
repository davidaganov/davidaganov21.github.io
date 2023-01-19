import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Projects } from "./Projects"

describe("Projects component", () => {
  it("Projects renders", () => {
    render(<Projects />)

    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#projects")
  })

  it("Projects snapshot", () => {
    const projects = render(<Projects />)

    expect(projects).toMatchSnapshot()
  })
})
