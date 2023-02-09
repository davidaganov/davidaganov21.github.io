import { View } from "@react-pdf/renderer"
import { Icon } from "../"

export interface ScoreProps {
  id: string
  rank: number
}

export const Score = ({ id, rank }: ScoreProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={`${id}-${index}`}
          size={7}
          name="dot"
          style={{ marginRight: 1 }}
          color={index <= rank - 1 ? "#995aa4" : "#9a9db1"}
        />
      ))}
    </View>
  )
}
