import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import i18n from "../../services/i18n"
import { LanguageSwitcher } from "./LanguageSwitcher"

describe("Language Switcher component", () => {
  it("Language Switcher renders", () => {
    render(<LanguageSwitcher />)

    expect(screen.getAllByRole("option")).toHaveLength(2)
  })

  it("Language change by click to the button", () => {
    render(<LanguageSwitcher />)

    expect(i18n.language === "en").toBeTruthy()

    userEvent.click(screen.getByRole("option", { name: /select language russian/i }))

    expect(i18n.language === "ru").toBeTruthy()
  })

  it("Language Switcher snapshot", () => {
    const title = render(<LanguageSwitcher />)

    expect(title).toMatchSnapshot()
  })
})
