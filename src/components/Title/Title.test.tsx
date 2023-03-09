import { render, screen } from "@testing-library/react"
import { Title } from "./Title"

describe("Title component", () => {
  it("Title renders", () => {
    render(
      <Title
        link="#test"
        title="Test"
        direction="ltr"
      />
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#test")
  })

  it("Title snapshot", () => {
    const title = render(
      <Title
        link="#link"
        title="Test"
        direction="ltr"
      />
    )

    expect(title).toMatchSnapshot()
  })
})
