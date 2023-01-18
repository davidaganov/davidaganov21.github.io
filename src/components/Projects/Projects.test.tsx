import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Projects } from "./Projects"

jest.mock("@react-pdf/renderer", () => {
  return {
    PDFDownloadLink: jest.fn(() => null),
    Font: { register: jest.fn(() => null) },
    StyleSheet: { create: jest.fn(() => null) }
  }
})

describe("Projects component", () => {
  it("Projects renders", () => {
    render(<Projects />)

    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#projects")
  })

  it("Projects snapshot", () => {
    const projects = render(<Projects />)

    expect(projects).toMatchSnapshot()
  })
})
