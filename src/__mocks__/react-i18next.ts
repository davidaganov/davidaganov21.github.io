const i18next: any = jest.createMockFromModule("react-i18next")

i18next.useTranslation = () => {
  return { t: (str: string) => str }
}

module.exports = i18next

export default {}
