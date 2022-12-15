import { DetailedHTMLProps, HTMLAttributes } from "react"
import { RepoProps } from "../../interfaces"

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: RepoProps
}
