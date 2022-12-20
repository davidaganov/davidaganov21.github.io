import { v4 as uuidv4 } from "uuid"
import { useTranslation } from "react-i18next"
import Collapsible from "react-collapsible"
import styles from "./Skills.module.sass"
import cn from "classnames"
import { Title } from "../"

import { ReactComponent as HTMLIcon } from "./html.svg"
import { ReactComponent as CSSIcon } from "./css.svg"
import { ReactComponent as JSIcon } from "./js.svg"
import { ReactComponent as OtherIcon } from "./other.svg"

export const Skills = (): JSX.Element => {
  const { t } = useTranslation()

  const setIcon = (title: string) => {
    switch (title) {
      case "HTML":
        return <HTMLIcon />
      case "CSS":
        return <CSSIcon />
      case "JavaScript":
        return <JSIcon />
      default:
        return <OtherIcon />
    }
  }

  const buildSkills = () => {
    const skills = Object.values(t("skills.data", { returnObjects: true })).map((item) => {
      return { ...item, id: uuidv4() }
    })

    const categories = skills.map(({ id, title, list }) => {
      return (
        <Collapsible
          trigger={
            <h3>
              {title}
              {setIcon(title)}
            </h3>
          }
          classParentString={styles.item}
          triggerElementProps={{ id: `trigger-${id}` }}
          contentElementId={`content-${id}`}
          transitionTime={350}
          easing={"ease-in-out"}
          key={id}
          tabIndex={0}
        >
          <ul className={styles.list}>{buildItems(list)}</ul>
        </Collapsible>
      )
    })

    return <div className={styles.accordion}>{categories}</div>
  }

  const buildItems = (list: { id: string; title: string; tag: string[] }[]) => {
    return list.map(({ id, title, tag }) => {
      return (
        <li
          className={styles.content}
          key={id}
        >
          <p className={styles.title}>{title}</p>
          <ul className={styles.listNested}>{buildTags(tag)}</ul>
        </li>
      )
    })
  }

  const buildTags = (tag: string[]) => {
    return tag.map((skill) => {
      return (
        <li
          className={styles.listNestedItem}
          key={skill}
        >
          {skill}
        </li>
      )
    })
  }

  return (
    <section
      className={cn(styles.skills, "section-rtl")}
      id="skills"
    >
      <div className="inner">
        <Title
          number={2}
          link="#skills"
          title={t("skills.title")}
          direction="rtl"
        />

        {buildSkills()}
      </div>
    </section>
  )
}
