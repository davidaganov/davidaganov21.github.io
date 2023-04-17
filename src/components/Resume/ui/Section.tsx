import { View, Text, StyleSheet } from "@react-pdf/renderer"

export interface SectionProps {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16
  },
  title: {
    marginBottom: 1,
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#995aa4"
  },
  separator: {
    height: 2,
    marginTop: 1,
    marginBottom: 12,
    backgroundColor: "#995aa4"
  }
})

export const Section = ({ title, children }: SectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.separator]} />
      {children}
    </View>
  )
}
