import { Text, View, StyleSheet } from "@react-pdf/renderer"

export interface TechGroupProps {
  title: string
  tags: string[]
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  },
  title: {
    fontSize: 14,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    marginBottom: 6,
    color: "#0a192f"
  },
  tag: {
    fontSize: 6,
    fontFamily: "Barcade-Brawl",
    color: "#995aa4"
  },
  tagContainer: {
    borderStyle: "solid",
    borderColor: "#995aa4",
    borderWidth: 2,
    padding: 4,
    marginRight: 6,
    marginBottom: 6
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

export const TechGroup = ({ title, tags }: TechGroupProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag) => (
          <View
            key={tag}
            style={styles.tagContainer}
          >
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
