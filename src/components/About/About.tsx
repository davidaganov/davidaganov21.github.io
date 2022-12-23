import { PDFDownloadLink } from "@react-pdf/renderer"
import { useTranslation } from "react-i18next"
import styles from "./About.module.sass"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Title } from "../"
import { Resume } from "../Resume/Resume"

export const About = (): JSX.Element => {
  const { t } = useTranslation()

  const renderItems = () => {
    const descripton = Object.keys(t("about.description", { returnObjects: true }))
    const items = descripton.map((i) => {
      return (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: t(`about.description.${i}`) }}
        />
      )
    })

    return <>{items}</>
  }

  const items = renderItems()

  return (
    <section
      className={styles.about}
      id="about"
    >
      <div className="inner">
        <Title
          number={1}
          link="#about"
          title={t("about.title")}
          direction="ltr"
        />

        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.picture}
              src={require("../../assets/images/avatar.png")}
              alt="My avatar"
              width="350"
              height="350"
            />
            {items}
            <PDFDownloadLink
              document={<Resume />}
              fileName="resume.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <p className={styles.btn}>{t("about.loading")}</p>
                ) : (
                  <button className={styles.btn}>{t("about.download")}</button>
                )
              }
            </PDFDownloadLink>
          </div>
          <div className={styles.right}>
            <img
              className={styles.picture}
              src={require("../../assets/images/avatar.png")}
              alt="My avatar"
              width="350"
              height="350"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
