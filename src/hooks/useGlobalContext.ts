import { useContext } from "react"
import GlobalContext from "../store/Context"

export const useGlobalContext = () => {
  const { changePhotoStatus, photoStatus }: any = useContext(GlobalContext)
  return { changePhotoStatus, photoStatus }
}
