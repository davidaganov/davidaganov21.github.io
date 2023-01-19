import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

const randomUUID = () => {
  let value = 0
  return () => value++
}

jest.mock("uuid", () => {
  return { v4: randomUUID() }
})

describe("Skills component", () => {
  it("Skills renders", () => {
    render(<Skills />)
    const headers = screen.getAllByRole("button").length
    const regions = screen.getAllByRole("region").length

    expect(headers === regions).toBeTruthy()
    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#skills")
  })

  it("Skills snapshot", () => {
    const skills = render(<Skills />)

    expect(skills).toMatchSnapshot()
  })
})
