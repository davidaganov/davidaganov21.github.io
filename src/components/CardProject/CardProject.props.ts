import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ReposProps } from "../../interfaces"

export interface CardProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: ReposProps
}
