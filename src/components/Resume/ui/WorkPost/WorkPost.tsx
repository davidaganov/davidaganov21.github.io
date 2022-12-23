import { Text, View, StyleSheet, Link } from "@react-pdf/renderer"

import { IconText, DateRange } from "../"

export interface TitleProps {
  children: string
}

export interface WorkPostProps {
  companyName: string
  companyUrl?: string
  startAt: string
  endAt?: string
  current?: string
  title: string
  location: string
  description?: string
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
  description: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 10,
    fontFamily: "ua-brand",
    color: "#0a192f"
  },
  content: {
    marginTop: 10
  }
})

const Title = ({ children }: TitleProps): JSX.Element => {
  return <Text style={styles.title}>{children}</Text>
}

const WorkPlace = ({ children, url }: WorkPlaceProps): JSX.Element => {
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
  title,
  companyName,
  companyUrl,
  location,
  startAt,
  endAt,
  current,
  description
}: WorkPostProps) => {
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
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  )
}
