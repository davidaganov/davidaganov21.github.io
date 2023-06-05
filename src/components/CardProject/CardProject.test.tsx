import { render, screen } from "@testing-library/react"
import { CardProject } from "./CardProject"

const data = {
  id: "1",
  name: "Test",
  description: "Description project",
  html_url: "repo",
  topics: ["first", "second"],
  homepage: "demo"
}

describe("CardProject component", () => {
  it("CardProject renders", () => {
    render(<CardProject card={data} />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it("There is a link to live demo", () => {
    render(<CardProject card={data} />)

    expect(screen.getAllByRole("link")).toHaveLength(2)
  })

  it("No link to live demo", () => {
    render(<CardProject card={{ ...data, homepage: "" }} />)

    expect(screen.getAllByRole("link")).toHaveLength(1)
  })

  it("CardProject snapshot", () => {
    const card = render(<CardProject card={data} />)

    expect(card).toMatchSnapshot()
  })
})
