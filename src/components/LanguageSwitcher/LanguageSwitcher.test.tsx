import { render, screen } from "@testing-library/react"
import { LanguageSwitcher } from "./LanguageSwitcher"

describe("Language Switcher component", () => {
  it("Language Switcher renders", () => {
    render(<LanguageSwitcher />)

    expect(screen.getAllByRole("option")).toHaveLength(2)
  })

  it("Language Switcher snapshot", () => {
    const title = render(<LanguageSwitcher />)

    expect(title).toMatchSnapshot()
  })
})
