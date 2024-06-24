import { StyleSheet, Link, Image, View, Text } from "@react-pdf/renderer"
import { IconText } from "./IconText"
import { HeaderProps } from "../Resume"

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
    textTransform: "uppercase",
    fontSize: 22,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#0a192f"
  },
  subTitle: {
    fontSize: 14,
    marginTop: 4,
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

export const Heading = ({
  data: { name, job, phone, email, website, location },
  photoStatus
}: {
  data: HeaderProps
  photoStatus: boolean
}) => {
  const renderPhoto = () => {
    return (
      <View style={styles.leftColumn}>
        <Image
          style={styles.photo}
          src={require("../../../assets/images/photo.jpg")}
        />
      </View>
    )
  }

  const photo = renderPhoto()

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        {photoStatus ? photo : null}
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
