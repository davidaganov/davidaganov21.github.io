import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ReposProps } from "../../interfaces"

export interface CardRepoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: ReposProps
}
