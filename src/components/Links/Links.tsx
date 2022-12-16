import styles from "./Links.module.sass"

// import { Title } from ".."
// import data from "../../data"

export const Links = (): JSX.Element => {
  // const renderItems = () => {
  // const items = data.about.map((item, i) => {
  //   return (
  //     <p
  //       key={i}
  //       dangerouslySetInnerHTML={{ __html: item }}
  //     />
  //   )
  // })
  // return <>{items}</>
  // }

  // const items = renderItems()

  return (
    <section
      className={styles.links}
      id="links"
    >
      <div className="inner">
        <p>Test</p>
      </div>
    </section>
  )
}
