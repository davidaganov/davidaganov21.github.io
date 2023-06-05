// import { ButtonProps } from "./Button.props"
import styles from "./Button.module.sass"
import cn from "classnames"

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
type CommonAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

type LinkProps = CommonButtonProps & {
  href?: string
  children: ReactNode
} & Omit<CommonAnchorProps, "href">

export const Button = ({ children, className, ...props }: LinkProps) => {
  const renderLink = () => {
    return (
      <a
        className={cn(styles.btn, className)}
        {...props}
      >
        {children}
      </a>
    )
  }

  const renderButton = () => {
    return (
      <button
        className={cn(styles.btn, className)}
        {...props}
      >
        {children}
      </button>
    )
  }

  const link = renderLink()
  const button = renderButton()

  return <>{props.href ? link : button}</>
}
