import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

const data = {
  id: "1",
  name: "Test",
  description: "Description project",
  html_url: "repo",
  topics: ["first", "second"],
  homepage: "demo"
}

describe("Card component", () => {
  it("Card renders", () => {
    render(<Card card={data} />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it("There is a link to live demo", () => {
    render(<Card card={data} />)

    expect(screen.getAllByRole("link")).toHaveLength(2)
  })

  it("No link to live demo", () => {
    render(<Card card={{ ...data, homepage: "" }} />)

    expect(screen.getAllByRole("link")).toHaveLength(1)
  })

  it("Card snapshot", () => {
    const card = render(<Card card={data} />)

    expect(card).toMatchSnapshot()
  })
})
