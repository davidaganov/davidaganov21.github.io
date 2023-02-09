import { useTranslation } from "react-i18next"
import { PDFDownloadLink } from "@react-pdf/renderer"
import styles from "./DownloadResume.module.sass"

import { Resume } from "../Resume/Resume"

export const DownloadResume = () => {
  const { t } = useTranslation()

  return (
    <PDFDownloadLink
      document={<Resume />}
      fileName="resume.pdf"
      className={styles.btn}
    >
      {({ loading }) => (loading ? <>{t("about.loading")}</> : <>{t("about.download")}</>)}
    </PDFDownloadLink>
  )
}
