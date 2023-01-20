import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Repos } from "./Repos"

const data = [
  {
    id: "1",
    name: "First",
    description: "Lorem ipsum",
    homepage: "demo",
    html_url: "repo",
    topics: ["vue", "typescript"]
  },
  {
    id: "2",
    name: "Second",
    description: "Dolor sit",
    homepage: "",
    html_url: "repo",
    topics: ["react"]
  }
]

const topics_qty = data.map((i) => i.topics.length).reduce((a, b) => a + b)

describe("Repos component", () => {
  it("Repos renders", () => {
    render(<Repos repos={data} />)

    expect(screen.getAllByRole("option")).toHaveLength(topics_qty)
    expect(screen.getAllByRole("heading")).toHaveLength(data.length)
  })

  it("Repos renders without data", () => {
    render(<Repos />)

    expect(screen.queryByRole("option")).toBeNull()
    expect(screen.queryByRole("heading")).toBeNull()
    expect(screen.getByText(/projects not found/i)).toBeInTheDocument()
  })

  it("Sorting repositories is working", () => {
    render(<Repos repos={data} />)

    expect(screen.getByText(/first/i)).toBeInTheDocument()
    expect(screen.getByText(/second/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole("option", { name: /sort projects by tag react/i }))

    expect(screen.queryByText(/first/i)).toBeNull()
    expect(screen.queryByText(/second/i)).toBeInTheDocument()
  })

  it("Repos snapshot", () => {
    const repos = render(<Repos repos={data} />)

    expect(repos).toMatchSnapshot()
  })

  it("Repos snapshot without data", () => {
    const repos = render(<Repos />)

    expect(repos).toMatchSnapshot()
  })
})
