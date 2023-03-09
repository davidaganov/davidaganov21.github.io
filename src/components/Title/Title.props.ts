import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string
  link: string
  direction?: "rtl" | "ltr"
}
