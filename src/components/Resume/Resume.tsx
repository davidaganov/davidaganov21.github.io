import { Font, Page, Document, StyleSheet } from "@react-pdf/renderer"
import { useTranslation } from "react-i18next"
import uaBrand from "../../assets/fonts/ua-brand.ttf"
import uaBrandBold from "../../assets/fonts/ua-brand-Bold.ttf"
import BarcadeBrawl from "../../assets/fonts/Barcade-Brawl.ttf"

import { Heading } from "./Heading/Heading"

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50
  },
  row: {
    flexDirection: "row"
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 16,
    width: "55%"
  },
  rightColumn: {
    flexGrow: 1,
    width: "40%"
  }
})

export const Resume = () => {
  const { t } = useTranslation()
  const name = t("resume.name")
  const job = t("resume.job")

  Font.register({
    family: "ua-brand",
    fonts: [{ src: uaBrand }, { src: uaBrandBold, fontWeight: 700 }]
  })

  Font.register({
    family: "Barcade-Brawl",
    src: BarcadeBrawl
  })

  return (
    <Document
      title={`${name} - ${job}`}
      author={name}
      keywords={`frontend, developer, html, css, js, react, vue`}
    >
      <Page
        size="A4"
        style={styles.page}
      >
        <Heading />
      </Page>
    </Document>
  )
}
