import { useTranslation } from "react-i18next"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Resume } from "../Resume/Resume"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import cn from "classnames"

import styles from "./DownloadResume.module.sass"

export const DownloadResume = () => {
  const { t } = useTranslation()
  const { photoStatus, changePhotoStatus } = useGlobalContext()
  const date = new Date().toLocaleDateString("ru-RU").split(".").reverse().join("-")

  return (
    <div className={styles.container}>
      <PDFDownloadLink
        document={<Resume photoStatus={photoStatus} />}
        fileName={`CV_DavidAganov_${date}.pdf`}
        className={styles.btn}
      >
        {({ loading }) => (loading ? <>{t("about.loading")}</> : <>{t("about.download")}</>)}
      </PDFDownloadLink>
      <button
        type="button"
        className={cn(styles.photo, { [styles.active]: photoStatus })}
        onClick={() => changePhotoStatus()}
        title={photoStatus ? `${t("about.photoHide")}` : `${t("about.photoShow")}`}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.56 2a3 3 0 0 0-2.9 2.27L6.21 6H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-2.22l-.43-1.73A3 3 0 0 0 14.44 2H9.56ZM8.6 4.76A1 1 0 0 1 9.56 4h4.88a1 1 0 0 1 .97.76l.43 1.73A2 2 0 0 0 17.78 8H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.22a2 2 0 0 0 1.94-1.51l.43-1.73Z"
            fill="currentColor"
          />
        </svg>

        <span className="visually-hidden">
          {photoStatus ? t("about.photoHide") : t("about.photoShow")}
        </span>
      </button>
    </div>
  )
}
