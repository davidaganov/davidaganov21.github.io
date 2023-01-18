import { DetailedHTMLProps, HTMLAttributes } from "react"
import { RepoProps } from "../../interfaces"

export interface ReposProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  repos: RepoProps[]
}
