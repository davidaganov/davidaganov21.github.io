import { TitleProps } from "./Title.props"
import styles from "./Title.module.sass"
import cn from "classnames"

export const Title = ({
  title,
  className,
  link,
  number,
  direction,
  ...props
}: TitleProps): JSX.Element => {
  return (
    <h2
      className={cn(styles.title, className, {
        [styles.rtl]: direction === "rtl",
        [styles.ltr]: direction === "ltr"
      })}
      {...props}
    >
      <a
        href={link}
        aria-label={title}
      >
        <span>0{number}.</span> {title}
      </a>
    </h2>
  )
}
