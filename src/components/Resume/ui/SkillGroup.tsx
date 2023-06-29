import { Text, View, StyleSheet } from "@react-pdf/renderer"

export interface SkillGroupProps {
  title: string
  tags: string[]
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  },
  title: {
    fontSize: 12,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    marginBottom: 4,
    color: "#0a192f"
  },
  tag: {
    fontSize: 8,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#35465e"
  },
  tagContainer: {
    backgroundColor: "#d1d7e4",
    padding: 3,
    marginRight: 4,
    marginBottom: 4
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

export const SkillGroup = ({ title, tags }: SkillGroupProps) => {
  const buildGroupSkills = () => {
    if (title !== "Разное" && title !== "Other") {
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
  }

  const groupSkills = buildGroupSkills()

  return <>{groupSkills}</>
}
