import { Text, View, StyleSheet } from "@react-pdf/renderer"
import { Icon, IconName } from "../Icon/Icon"

export interface IconTextProps {
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
    fontSize: 8,
    marginLeft: 4,
    color: "#6d4e89"
  }
})

export function IconText({ text, iconName }: IconTextProps) {
  return (
    <View style={styles.container}>
      <Icon
        size={10}
        name={iconName}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
