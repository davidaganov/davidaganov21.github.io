import { render, screen } from "@testing-library/react"
import { Projects } from "./Projects"

describe("Projects component", () => {
  it("Projects renders", () => {
    render(<Projects title={true} />)

    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#projects")
  })

  it("Projects snapshot", () => {
    const sites = render(<Projects title={true} />)

    expect(sites).toMatchSnapshot()
  })
})
