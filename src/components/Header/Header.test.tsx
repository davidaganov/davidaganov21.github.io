import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe("Header component", () => {
  it("Header renders", () => {
    render(<Header />)

    expect(screen.getByText(/david aganov/i)).toBeInTheDocument()
  })

  it("Header snapshot", () => {
    const title = render(<Header />)

    expect(title).toMatchSnapshot()
  })
})
