import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { Score } from "."

export interface LanguageProps {
  data: {
    name: string
    scoreLabel: string
    score: number
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  name: {
    fontSize: 12,
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
    fontSize: 12,
    color: "#0a192f"
  }
})

export function Language({ data: { name, scoreLabel, score } }: LanguageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.dots} />
      <Text style={styles.scoreLabel}>{scoreLabel}</Text>
      <Score
        id="language"
        rank={score}
      />
    </View>
  )
}
