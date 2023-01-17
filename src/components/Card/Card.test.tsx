import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

const data = {
  id: "1",
  name: "Test",
  description: "Description project",
  html_url: "https://aganov.dev",
  topics: ["first", "second"],
  homepage: "https://aganov.dev"
}

describe("Card component", () => {
  it("Card renders", () => {
    render(<Card card={data} />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  // it("Card snapshot", () => {
  //   const title = render(<Card card={data} />)

  //   expect(title).toMatchSnapshot()
  // })
})
