import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { ErrorMessage } from "./ErrorMessage"

describe("Error Message component", () => {
  it("Error Message renders", () => {
    render(<ErrorMessage />)

    expect(screen.getByText("Error 404"))
  })

  it("Error Message snapshot", () => {
    const errorMessage = render(<ErrorMessage />)

    expect(errorMessage).toMatchSnapshot()
  })
})
