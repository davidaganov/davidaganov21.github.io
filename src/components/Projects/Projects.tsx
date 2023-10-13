import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Projects.module.sass"
import cn from "classnames"

import { RepoProps } from "../../interfaces"
import { Title, ProjectsList, Button } from ".."

export const Projects = ({ title }: { title: boolean }) => {
  const [projectsList, setProjectsList] = useState<RepoProps[]>([])

  const { t, i18n } = useTranslation()

  useEffect(() => {
    setData()
  }, [])

  useEffect(() => {
    i18n.on("languageChanged", setData)
    return () => {
      i18n.off("languageChanged", setData)
    }
  }, [i18n])

  const setData = () => {
    setProjectsList(t("projects.list", { returnObjects: true }))
  }

  return (
    <section
      className={styles.projects}
      id="projects"
    >
      <div className={cn(styles.inner, !title ? styles.carousel : null, "inner")}>
        {title ? (
          <Title
            link="#projects"
            title={t("projects.title")}
          />
        ) : null}

        <div className={styles.control}>
          <Button
            type="button"
            className={cn("projects-btn-prev", styles.arrow, styles.prev)}
          >
            &lt;
          </Button>
          <Button
            type="button"
            className={cn("projects-btn-next", styles.arrow, styles.next)}
          >
            &gt;
          </Button>
        </div>

        <div className={styles.body}>
          <ProjectsList projectsList={projectsList} />
        </div>
      </div>
    </section>
  )
}
