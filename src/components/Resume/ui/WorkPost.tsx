import { Text, View, StyleSheet, Link } from "@react-pdf/renderer"

import { IconText, DateRange } from "."

export interface TitleProps {
  children: string
}

export interface WorkPostProps {
  data: {
    companyName: string
    companyUrl?: string
    startAt: string
    endAt?: string
    current?: string
    title: string
    location: string
    description?: string
    list?: string[]
  }
}

export interface WorkPlaceProps {
  url: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: "ua-brand",
    fontWeight: "bold",
    color: "#0a192f"
  },
  metaInfoContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center"
  },
  workPlace: {
    fontSize: 7,
    fontFamily: "Barcade-Brawl",
    fontWeight: "bold",
    color: "#995aa4"
  },
  about: {
    marginTop: 8,
    marginBottom: 15
  },
  description: {
    fontSize: 10,
    fontFamily: "ua-brand",
    color: "#0a192f"
  },
  list: {
    flexDirection: "row"
  },
  mark: {
    marginTop: 4,
    marginRight: 6,
    fontSize: 10,
    fontFamily: "ua-brand",
    color: "#0a192f"
  },
  item: {
    maxWidth: "90%",
    marginTop: 4,
    fontSize: 10,
    fontFamily: "ua-brand",
    color: "#0a192f"
  }
})

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>
}

const WorkPlace = ({ children, url }: WorkPlaceProps) => {
  if (url) {
    return (
      <Link src={url}>
        <Text style={styles.workPlace}>{children}</Text>
      </Link>
    )
  }

  return <Text style={styles.workPlace}>{children}</Text>
}

export const WorkPost = ({
  data: { title, companyName, companyUrl, location, startAt, endAt, current, description, list }
}: WorkPostProps) => {
  const buildAbout = () => {
    if (description && description.length > 0) {
      return <Text style={styles.description}>{description}</Text>
    } else if (list && list.length > 0) {
      return list.map((item, index) => (
        <View
          key={index}
          style={styles.list}
        >
          <Text style={styles.mark}>•</Text>
          <Text style={styles.item}>{item}</Text>
        </View>
      ))
    } else {
      return null
    }
  }

  const about = buildAbout()

  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.metaInfoContainer}>
        {companyName ? <WorkPlace url={companyUrl}>{companyName}</WorkPlace> : null}
        <DateRange
          style={{ marginLeft: companyName ? "auto" : 0, marginRight: 16 }}
          startAt={startAt}
          endAt={endAt}
          current={current}
        />
        <IconText
          text={location}
          iconName="location"
        />
      </View>
      <View style={styles.about}>{about}</View>
    </View>
  )
}
