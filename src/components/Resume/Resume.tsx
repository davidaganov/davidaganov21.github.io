import { Page, View, Text, Document, StyleSheet } from "@react-pdf/renderer"
import { useTranslation } from "react-i18next"

import { Heading, Section, WorkPost, TechGroup, Language, SocialMedia } from "./ui"
import "./ui/fonts"

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
    marginBottom: 12,
    fontFamily: "ua-brand",
    fontSize: 10,
    color: "#0a192f"
  }
})

export const Resume = () => {
  const { t } = useTranslation()

  const name = t("resume.header.name")
  const job = t("resume.header.job")
  const about = t("resume.about")

  const jobsList = Object.values(t("resume.jobs", { returnObjects: true }))
  const techList = Object.values(t("resume.tech", { returnObjects: true }))
  const langList = Object.values(t("resume.languages", { returnObjects: true }))

  const titles = {
    jobs: t("resume.titles.jobs"),
    about: t("resume.titles.about"),
    technologies: t("resume.titles.technologies"),
    languages: t("resume.titles.languages"),
    social: t("resume.titles.social")
  }
  const header = {
    name: t("resume.header.name"),
    job: t("resume.header.job"),
    phone: t("resume.header.phone"),
    email: t("resume.header.email"),
    website: t("resume.header.website"),
    location: t("resume.header.location")
  }
  const social = {
    telegram: "https://t.me/davidaganov",
    github: "https://github.com/davidaganov",
    linkedin: "https://www.linkedin.com/in/david-aganov"
  }

  const buildJobsList = () => {
    return jobsList.map((job) => (
      <WorkPost
        key={job.id}
        title={job.title}
        companyName={job.company}
        companyUrl={job.companyUrl}
        location={job.location}
        startAt={job.startAt}
        endAt={job.endAt}
        current={job.current}
        description={job.description}
      />
    ))
  }

  const buildTechnologies = () => {
    return techList.map((techGroup) => (
      <TechGroup
        key={techGroup.id}
        title={techGroup.title}
        tags={techGroup.tags}
      />
    ))
  }

  const buildLanguages = () => {
    return langList.map((lang) => (
      <Language
        key={lang.id}
        name={lang.name}
        scoreLabel={lang.scoreLabel}
        score={lang.score}
      />
    ))
  }

  const jobs = buildJobsList()
  const technologies = buildTechnologies()
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
        <Heading
          name={header.name}
          job={header.job}
          phone={header.phone}
          email={header.email}
          website={header.website}
          location={header.location}
        />

        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Section title={titles.jobs}>{jobs}</Section>
            <Section title={titles.about}>
              <Text style={styles.about}>{about}</Text>
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
            <Section title={titles.technologies}>{technologies}</Section>
            <Section title={titles.languages}>{languages}</Section>
          </View>
        </View>
      </Page>
    </Document>
  )
}
