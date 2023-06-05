import { Link } from "react-router-dom"
import { TitleProps } from "./Title.props"
import styles from "./Title.module.sass"
import cn from "classnames"

export const Title = ({ title, className, link, direction = "ltr", ...props }: TitleProps) => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div
      className={cn(styles.title, className, {
        [styles.rtl]: direction === "rtl",
        [styles.ltr]: direction === "ltr"
      })}
      {...props}
      onClick={() => copyLink()}
    >
      {direction === "ltr" && (
        <Link
          className={styles.link}
          to={link}
        >
          <h2>{title}</h2>
        </Link>
      )}
      {direction === "rtl" && (
        <Link
          className={styles.link}
          to={link}
        >
          <h2>{title}</h2>
        </Link>
      )}
    </div>
  )
}
