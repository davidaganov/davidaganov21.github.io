import { Text, StyleSheet, View, Link } from "@react-pdf/renderer"

export interface SocialMediaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
  name: string
  profileUrl: string
}

const styles = StyleSheet.create({
  name: {
    fontFamily: "ua-brand",
    fontSize: 10,
    color: "#0a192f"
  },
  username: {
    fontFamily: "ua-brand",
    fontSize: 8,
    marginTop: 2,
    color: "#995aa4"
  }
})

export const SocialMedia = ({ name, profileUrl, ...props }: SocialMediaProps): JSX.Element => {
  const username = `@${profileUrl.split("/").splice(-1)}`

  return (
    <View {...props}>
      <Text style={styles.name}>{name}</Text>
      <Link src={profileUrl}>
        <Text style={styles.username}>{username}</Text>
      </Link>
    </View>
  )
}
