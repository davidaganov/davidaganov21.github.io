import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { About } from "./About"

describe("About component", () => {
  it("About renders", () => {
    render(<About />)

    expect(screen.getByText("#").closest("a")).toHaveAttribute("href", "#about")
  })

  it("About snapshot", () => {
    const about = render(<About />)

    expect(about).toMatchSnapshot()
  })
})

// import "@testing-library/jest-dom"
// import { render, screen } from "@testing-library/react"
// import { About } from "./About"

// describe("About component", () => {
//   it("About renders", () => {
//     render(<About />)

//     // expect(screen.getByText(/test/i)).toBeInTheDocument()
//   })

//   it("About snapshot", () => {
//     const about = render(<About />)

//     expect(about).toMatchSnapshot()
//   })
// })
