import { StyleSheet, Link, View, Text } from "@react-pdf/renderer"
import { useTranslation } from "react-i18next"

import { IconText } from "../IconText/IconText"

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 16,
    flexDirection: "row"
  },
  name: {
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: "ua-brand",
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#6d4e89"
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 12
  },
  link: {
    marginRight: 16,
    textDecoration: "none"
  }
})

export function Heading() {
  const { t } = useTranslation()

  const data = {
    name: t("resume.name"),
    job: t("resume.job"),
    phone: t("resume.phone"),
    email: t("resume.email"),
    website: t("resume.website"),
    location: t("resume.location")
  }

  const { name, job, phone, email, website, location } = data

  return (
    <View style={styles.container}>
      <View style={{ margin: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subTitle}>{job}</Text>
        <View style={styles.infoContainer}>
          {phone ? (
            <Link
              src={`tel:${phone}`}
              style={styles.link}
            >
              <IconText
                text={phone}
                iconName="call"
              />
            </Link>
          ) : null}
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
