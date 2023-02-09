import { TitleProps } from "./Title.props"
import styles from "./Title.module.sass"
import cn from "classnames"

export const Title = ({
  title,
  className,
  link,
  number,
  direction = "ltr",
  ...props
}: TitleProps) => {
  const renderNumber = () => {
    return number ? <span aria-hidden="true">0{number}.</span> : null
  }

  const numberTitle = renderNumber()

  return (
    <div
      className={cn(styles.title, className, {
        [styles.rtl]: direction === "rtl",
        [styles.ltr]: direction === "ltr"
      })}
      {...props}
    >
      {direction === "ltr" && (
        <h2>
          {numberTitle} {title}
        </h2>
      )}
      <a
        href={link}
        aria-label={title}
      >
        #
      </a>
      {direction === "rtl" && (
        <h2>
          {title} {numberTitle}
        </h2>
      )}
    </div>
  )
}
