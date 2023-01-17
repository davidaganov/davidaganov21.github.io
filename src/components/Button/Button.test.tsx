import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button component", () => {
  it("Button renders", () => {
    render(<Button href="#test">Test</Button>)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#test")
    expect(screen.getByRole("link")).toHaveClass("btn") //- Default class
  })

  it("Button snapshot", () => {
    const title = render(<Button href="#link">Test</Button>)

    expect(title).toMatchSnapshot()
  })
})
