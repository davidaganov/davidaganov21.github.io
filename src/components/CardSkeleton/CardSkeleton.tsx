import styles from "./CardSkeleton.module.sass"
import cn from "classnames"

export const CardSkeleton = (): JSX.Element => {
  return (
    <ul className="work__projects">
      <li className={cn(styles.skeleton, "work__project")}></li>
      <li className={cn(styles.skeleton, "work__project")}></li>
      <li className={cn(styles.skeleton, "work__project")}></li>
      <li className={cn(styles.skeleton, "work__project")}></li>
    </ul>
  )
}
