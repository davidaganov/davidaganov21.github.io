import styles from "./About.module.sass"

import { Title } from "../"
import data from "../../data"

export const About = (): JSX.Element => {
  const renderItems = () => {
    const items = data.about.map((item, i) => {
      return (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: item }}
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
          title="About Me"
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
