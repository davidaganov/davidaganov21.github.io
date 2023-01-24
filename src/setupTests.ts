import "@testing-library/jest-dom"
import i18n from "./services/i18n"

i18n.init()

jest.mock("@react-pdf/renderer", () => {
  return {
    PDFDownloadLink: jest.fn(() => null),
    Font: { register: jest.fn(() => null) },
    StyleSheet: { create: jest.fn(() => null) }
  }
})

const randomUUID = () => {
  let value = 0
  return () => value++
}

jest.mock("uuid", () => {
  return { v4: randomUUID() }
})
