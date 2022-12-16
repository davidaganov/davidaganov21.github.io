import styles from "./ErrorMessage.module.sass"

export const ErrorMessage = (): JSX.Element => {
  return (
    <section id="error-message">
      <div className="inner">
        <h2 className={styles.title}>Error 404</h2>
      </div>
    </section>
  )
}
