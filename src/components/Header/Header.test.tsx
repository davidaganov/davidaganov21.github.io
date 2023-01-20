import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

const data = [
  { link: "#test", title: "Test" },
  { link: "#link", title: "Link" }
]

describe("Header component", () => {
  it("Header renders", () => {
    render(<Header list={data} />)

    expect(screen.getByText(/david aganov/i)).toBeInTheDocument()
  })

  it("Header snapshot", () => {
    const title = render(<Header list={data} />)

    expect(title).toMatchSnapshot()
  })
})
