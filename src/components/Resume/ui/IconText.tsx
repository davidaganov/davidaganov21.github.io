import { Text, View, StyleSheet } from "@react-pdf/renderer"
import { Icon, IconName } from "."

export interface IconTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
  text: string
  iconName: IconName
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontFamily: "ua-brand",
    fontSize: 9,
    marginLeft: 4,
    color: "#0a192f"
  }
})

export const IconText = ({ style, text, iconName }: IconTextProps) => {
  return (
    <View style={[styles.container, style]}>
      <Icon
        size={10}
        name={iconName}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
