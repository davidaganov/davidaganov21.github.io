import { render, screen } from "@testing-library/react"
import { Repos } from "./Repos"

describe("Repos component", () => {
  it("Repos renders", () => {
    render(<Repos />)

    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#projects")
  })

  it("Repos snapshot", () => {
    const projects = render(<Repos />)

    expect(projects).toMatchSnapshot()
  })
})
