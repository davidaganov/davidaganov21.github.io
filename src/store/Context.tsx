import { createContext, useState } from "react"

const GlobalContext = createContext({})

export const GlobalProvider = ({ children }: any) => {
  const [photoStatus, setPhotoStatus] = useState(true)

  const changePhotoStatus = () => {
    setPhotoStatus(!photoStatus)
  }

  return (
    <GlobalContext.Provider
      value={{
        photoStatus,
        changePhotoStatus
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
