import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ReposProps } from "../../interfaces"

export interface ReposListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  repos?: ReposProps[]
}
