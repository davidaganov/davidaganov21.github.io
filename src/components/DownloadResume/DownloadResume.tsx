import { useTranslation } from "react-i18next"
import { PDFDownloadLink } from "@react-pdf/renderer"
import styles from "./DownloadResume.module.sass"

import { Resume } from "../Resume/Resume"

export const DownloadResume = () => {
  const { t } = useTranslation()
  const date = new Date().toLocaleDateString("ru-RU").split(".").reverse().join("-")

  return (
    <PDFDownloadLink
      document={<Resume />}
      fileName={`CV_DavidAganov_${date}.pdf`}
      className={styles.btn}
    >
      {({ loading }) => (loading ? <>{t("about.loading")}</> : <>{t("about.download")}</>)}
    </PDFDownloadLink>
  )
}
