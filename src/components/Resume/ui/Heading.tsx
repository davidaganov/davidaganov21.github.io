import { StyleSheet, Link, Image, View, Text } from "@react-pdf/renderer"

import { IconText } from "./IconText"
import { HeaderProps } from "../Resume"

interface HeadingProps {
  data: HeaderProps
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 20,
    flexDirection: "row"
  },
  block: {
    flexDirection: "row",
    margin: 1
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 20
  },
  rightColumn: {
    flexGrow: 1
  },
  photo: {
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#213e73"
  },
  name: {
    marginBottom: 5,
    textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "Barcade-Brawl",
    fontWeight: "bold",
    color: "#0a192f"
  },
  subTitle: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#213e73"
  },
  infoContainer: {
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    marginTop: 5
  },
  link: {
    minWidth: 100,
    marginRight: 12,
    textDecoration: "none"
  }
})

export const Heading = ({ data: { name, job, phone, email, website, location } }: HeadingProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.leftColumn}>
          <Image
            style={styles.photo}
            src={require("../../../assets/images/photo.jpg")}
          />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subTitle}>{job}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.row}>
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
            </View>
            <View style={styles.row}>
              <Link
                src={`https://${website}`}
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
      </View>
    </View>
  )
}
