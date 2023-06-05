import { render, screen } from "@testing-library/react"
import { CardRepo } from "./CardRepo"

const data = {
  id: "1",
  name: "Test",
  description: "Description project",
  html_url: "repo",
  topics: ["first", "second"],
  homepage: "demo"
}

describe("CardRepo component", () => {
  it("CardRepo renders", () => {
    render(<CardRepo card={data} />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it("There is a link to live demo", () => {
    render(<CardRepo card={data} />)

    expect(screen.getAllByRole("link")).toHaveLength(2)
  })

  it("No link to live demo", () => {
    render(<CardRepo card={{ ...data, homepage: "" }} />)

    expect(screen.getAllByRole("link")).toHaveLength(1)
  })

  it("CardRepo snapshot", () => {
    const card = render(<CardRepo card={data} />)

    expect(card).toMatchSnapshot()
  })
})
