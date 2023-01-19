import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Repos } from "./Repos"

const data = [
  {
    id: "1",
    name: "First repos",
    description: "Lorem ipsum",
    homepage: "demo",
    html_url: "repo",
    topics: ["vue", "typescript"]
  },
  {
    id: "2",
    name: "Second repos",
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

    expect(screen.getAllByRole("checkbox")).toHaveLength(topics_qty)
    expect(screen.getAllByRole("heading")).toHaveLength(data.length)
  })

  it("Sorting repositories is working", () => {
    render(<Repos repos={data} />)

    expect(screen.getByText(/First repos/)).toBeInTheDocument()
    expect(screen.getByText(/Second repos/)).toBeInTheDocument()

    userEvent.click(screen.getByDisplayValue("react"))

    expect(screen.queryByText(/First repos/)).toBeNull()
    expect(screen.queryByText(/Second repos/)).toBeInTheDocument()
  })

  it("Repos snapshot", () => {
    expect(render(<Repos repos={data} />)).toMatchSnapshot()
  })
})
