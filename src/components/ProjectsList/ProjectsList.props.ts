import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ReposProps } from "../../interfaces"

export interface ProjectsListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  projectsList?: ReposProps[]
}
