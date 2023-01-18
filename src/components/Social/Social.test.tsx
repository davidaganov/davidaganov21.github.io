import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Social } from "./Social"

describe("Social component", () => {
  it("Social renders", () => {
    render(<Social />)

    expect(screen.getByRole("list"))
  })

  it("Social set user class", () => {
    render(<Social className="customClass" />)

    expect(screen.getByRole("list")).toHaveClass("customClass")
  })

  it("Social snapshot", () => {
    expect(render(<Social />)).toMatchSnapshot()
  })
})
