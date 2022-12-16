import { DetailedHTMLProps, ReactNode, HTMLProps } from "react"

export interface ButtonProps
  extends DetailedHTMLProps<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  to?: string
  children: ReactNode
}
