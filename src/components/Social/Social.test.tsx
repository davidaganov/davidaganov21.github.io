import { render, screen } from "@testing-library/react"
import { Social } from "./Social"

describe("Social component", () => {
  it("Social renders", () => {
    render(<Social />)

    expect(screen.getAllByRole("link")).toHaveLength(2)
  })

  it("Social set user class", () => {
    render(<Social className="customClass" />)

    expect(screen.getByRole("list")).toHaveClass("customClass")
  })

  it("Social snapshot", () => {
    expect(render(<Social />)).toMatchSnapshot()
  })
})
