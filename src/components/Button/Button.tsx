import { ButtonProps } from "./Button.props"
import styles from "./Button.module.sass"
import cn from "classnames"

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <a
      className={cn(styles.btn, className)}
      {...props}
    >
      {children}
    </a>
  )
}
