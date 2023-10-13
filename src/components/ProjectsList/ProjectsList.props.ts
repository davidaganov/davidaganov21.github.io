import { DetailedHTMLProps, HTMLAttributes } from "react"
import { RepoProps } from "../../interfaces"

export interface ProjectsListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  projectsList?: RepoProps[]
}
