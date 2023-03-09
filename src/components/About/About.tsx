import { useTranslation } from "react-i18next"
import styles from "./About.module.sass"

import { Title, DownloadResume } from "../"

export const About = () => {
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
          link="#about"
          title={t("about.title")}
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
            <DownloadResume />
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
