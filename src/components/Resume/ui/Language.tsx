import { View, Text, StyleSheet } from "@react-pdf/renderer"

export interface LanguageProps {
  data: {
    name: string
    scoreLabel: string
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6
  },
  name: {
    fontSize: 10,
    fontFamily: "ua-brand"
  },
  dots: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    borderBottom: 1,
    borderBottomColor: "#9a9db1",
    borderBottomStyle: "dotted"
  },
  scoreLabel: {
    marginLeft: "auto",
    marginRight: 5,
    fontFamily: "ua-brand",
    fontSize: 10,
    color: "#0a192f"
  }
})

export function Language({ data: { name, scoreLabel } }: LanguageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.dots} />
      <Text style={styles.scoreLabel}>{scoreLabel}</Text>
    </View>
  )
}
