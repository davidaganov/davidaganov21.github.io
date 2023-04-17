import { Page, View, Text, Document, StyleSheet } from "@react-pdf/renderer"
import { useTranslation } from "react-i18next"

import { Heading, Section, WorkPost, SkillGroup, Language, SocialMedia } from "./ui"
import "./ui/fonts"

export interface HeaderProps {
  name: string
  job: string
  phone: string
  email: string
  website: string
  location: string
}

interface TitlesProps {
  jobs: string
  about: string
  skills: string
  languages: string
  social: string
}

interface ListItem {
  id: number
  title: string
  tags: string[]
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50
  },
  row: {
    flexDirection: "row"
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 20,
    width: "55%"
  },
  rightColumn: {
    flexGrow: 1,
    width: "40%"
  },
  about: {
    gap: 10,
    marginBottom: 12
  },
  aboutText: {
    fontFamily: "ua-brand",
    fontSize: 10,
    color: "#0a192f"
  }
})

export const Resume = () => {
  const { t } = useTranslation()

  const name = t("resume.header.name")
  const job = t("resume.header.job")
  const aboutText = Object.values(t("resume.about", { returnObjects: true }))

  const jobsList = Object.values(t("resume.jobs", { returnObjects: true }))
  const skillsList = Object.values(t("skills.data", { returnObjects: true }))
  const langList = Object.values(t("resume.languages", { returnObjects: true }))

  const titles: TitlesProps = t("resume.titles", { returnObjects: true })
  const header: HeaderProps = t("resume.header", { returnObjects: true })

  const social = {
    telegram: "https://t.me/davidaganov",
    github: "https://github.com/davidaganov",
    linkedin: "https://www.linkedin.com/in/david-aganov"
  }

  const buildAbout = () => {
    return aboutText.map((item) => (
      <Text
        key={item}
        style={styles.aboutText}
      >
        {item}
      </Text>
    ))
  }

  const buildJobsList = () => {
    return jobsList.map((job) => (
      <WorkPost
        key={job.id}
        data={job}
      />
    ))
  }

  const buildSkills = () => {
    return skillsList.map((skillGroup) => {
      skillGroup.list = skillGroup.list.reduce(
        (acc: string[], { tags }: ListItem) => acc.concat(tags),
        []
      )

      return (
        <SkillGroup
          key={skillGroup.id}
          title={skillGroup.title}
          tags={skillGroup.list}
        />
      )
    })
  }

  const buildLanguages = () => {
    return langList.map((lang) => (
      <Language
        key={lang.id}
        data={lang}
      />
    ))
  }

  const about = buildAbout()
  const jobs = buildJobsList()
  const skills = buildSkills()
  const languages = buildLanguages()

  return (
    <Document
      title={`${name} - ${job}`}
      author={name}
      keywords={`frontend, developer, html, css, js, react, vue`}
    >
      <Page
        size="A4"
        style={styles.page}
      >
        <Heading data={header} />

        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Section title={titles.jobs}>{jobs}</Section>
            <Section title={titles.about}>
              <View style={styles.about}>{about}</View>
            </Section>
            <Section title={titles.social}>
              <View style={{ flexDirection: "row" }}>
                <SocialMedia
                  name="Telegram"
                  profileUrl={social.telegram}
                  style={{ flex: 1 }}
                />
                <SocialMedia
                  name="Github"
                  profileUrl={social.github}
                  style={{ flex: 1 }}
                />
                <SocialMedia
                  name="LinkedIn"
                  profileUrl={social.linkedin}
                  style={{ flex: 1 }}
                />
              </View>
            </Section>
          </View>
          <View style={styles.rightColumn}>
            <Section title={titles.skills}>{skills}</Section>
            <Section title={titles.languages}>{languages}</Section>
          </View>
        </View>
      </Page>
    </Document>
  )
}
