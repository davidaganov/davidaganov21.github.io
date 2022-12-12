import { ButtonProps } from "./Button.props"
import styles from "./Button.module.sass"
import cn from "classnames"

export const Button = ({ children, link, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <a
      href={link}
      className={cn(styles.btn, className)}
      {...props}
    >
      {children}
    </a>
  )
}
