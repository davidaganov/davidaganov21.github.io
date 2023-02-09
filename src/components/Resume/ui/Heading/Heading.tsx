import { StyleSheet, Link, View, Text } from "@react-pdf/renderer"

import { IconText } from "../IconText/IconText"

interface HeadingProps {
  name: string
  job: string
  phone: string
  email: string
  website: string
  location: string
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 20,
    flexDirection: "row"
  },
  name: {
    marginBottom: 5,
    textTransform: "uppercase",
    fontSize: 15,
    fontFamily: "Barcade-Brawl",
    fontWeight: "bold",
    color: "#0a192f"
  },
  subTitle: {
    fontSize: 12,
    marginTop: 6,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#995aa4"
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  link: {
    marginRight: 12,
    textDecoration: "none"
  }
})

export const Heading = ({ name, job, phone, email, website, location }: HeadingProps) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subTitle}>{job}</Text>
        <View style={styles.infoContainer}>
          <Link
            src={`tel:${phone}`}
            style={styles.link}
          >
            <IconText
              text={phone}
              iconName="call"
            />
          </Link>
          <Link
            src={`mailto:${email}`}
            style={styles.link}
          >
            <IconText
              text={email}
              iconName="atSymbol"
            />
          </Link>
          <Link
            src={website}
            style={styles.link}
          >
            <IconText
              text={website}
              iconName="link"
            />
          </Link>
          <IconText
            text={location}
            iconName="location"
          />
        </View>
      </View>
    </View>
  )
}
