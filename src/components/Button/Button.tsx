import { ButtonProps } from "./Button.props"
import styles from "./Button.module.sass"
import cn from "classnames"
import { Link } from "react-router-dom"

export const Button = ({ children, to, className, ...props }: ButtonProps): JSX.Element => {
  if (to) {
    return (
      <Link
        to={to}
        className={cn(styles.btn, className)}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a
        className={cn(styles.btn, className)}
        {...props}
      >
        {children}
      </a>
    )
  }
}
