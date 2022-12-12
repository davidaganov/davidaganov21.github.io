import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

export interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode
  link: string
}
