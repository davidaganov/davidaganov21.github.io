import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe("Skills component", () => {
  it("Skills renders", () => {
    render(<Skills />)
    const headers = screen.getAllByRole("button").length
    const regions = screen.getAllByRole("region").length

    expect(headers === regions).toBeTruthy()
    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#skills")
  })

  it("Skills snapshot", () => {
    const skills = render(<Skills />)

    expect(skills).toMatchSnapshot()
  })
})
