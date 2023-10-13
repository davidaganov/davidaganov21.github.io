import { DetailedHTMLProps, HTMLAttributes } from "react"
import { RepoProps } from "../../interfaces"

export interface CardProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: RepoProps
}
