import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

describe("Footer component", () => {
  it("Footer renders", () => {
    render(<Footer />)

    expect(screen.getByText(/davidaganov21@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByText(/developed & designed/i)).toBeInTheDocument()
  })

  it("Footer snapshot", () => {
    const title = render(<Footer />)

    expect(title).toMatchSnapshot()
  })
})
