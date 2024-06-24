import { Page, View, Text, Link, Document, StyleSheet } from "@react-pdf/renderer"
import { useTranslation } from "react-i18next"

import { getPluralForm } from "../../hooks/pluralForm"

import { Heading, Section, WorkPost, SkillGroup, Language } from "./ui"
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

interface WorkProject {
  id: number
  title: string
  url: string
  tech: string[]
  description: string
  duties?: string[]
}

interface Job {
  id: number
  title: string
  companyName: string
  companyUrl?: string
  description: string
  list?: string[]
  projects?: WorkProject[]
  location: string
  startAt: string
  endAt?: string
  current?: string
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 45
  },
  row: {
    flexDirection: "row"
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 20,
    width: "38%"
  },
  rightColumn: {
    flexGrow: 1,
    width: "57%"
  },
  about: {
    gap: 10,
    marginBottom: 12
  },
  aboutText: {
    fontFamily: "ua-brand",
    fontSize: 10,
    color: "#0a192f"
  },
  link: {
    marginBottom: 4,
    fontFamily: "ua-brand",
    fontSize: 10,
    textDecoration: "none",
    color: "#0a192f"
  }
})

export const Resume = ({ photoStatus }: { photoStatus: boolean }) => {
  const { t } = useTranslation()

  const name = t("resume.header.name")
  const job = t("resume.header.job")
  const aboutText = Object.values(t("resume.about", { returnObjects: true }))

  const jobsList = Object.values(t("resume.jobs", { returnObjects: true }))
  const skillsList = Object.values(t("skills.data", { returnObjects: true }))
  const langList = Object.values(t("resume.languages", { returnObjects: true }))

  const titles: TitlesProps = t("resume.titles", { returnObjects: true })
  const header: HeaderProps = t("resume.header", { returnObjects: true })

  const calculateTotalExperience = (jobs: Job[]) => {
    let totalMonths = 0
    jobs.forEach((job: Job) => {
      const startDate = new Date(job.startAt)
      const endDate = job.endAt ? new Date(job.endAt) : new Date()
      const diffInDays = Math.ceil((Number(endDate) - Number(startDate)) / (1000 * 60 * 60 * 24))
      let diffInMonths = Math.ceil(diffInDays / 30.44)

      totalMonths += diffInMonths
    })

    let years = Math.floor(totalMonths / 12)
    let months = totalMonths % 12
    let result = ""

    if (years > 0) {
      result += `${years} ${getPluralForm(years, "year_singular", "year_few", "year_many")} `
    }
    if (months > 0) {
      result += `${months} ${getPluralForm(months, "month_singular", "month_few", "month_many")}`
    }

    return result.trim()
  }

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
        <Heading
          data={header}
          photoStatus={photoStatus}
        />

        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Section title={titles.skills}>{skills}</Section>
            <Section title={titles.languages}>{languages}</Section>
            <Section title={titles.social}>
              <View>
                <Link
                  src={social.telegram}
                  style={styles.link}
                >
                  <Text>Telegram</Text>
                </Link>
                <Link
                  src={social.github}
                  style={styles.link}
                >
                  <Text>Github</Text>
                </Link>
                <Link
                  src={social.linkedin}
                  style={styles.link}
                >
                  <Text>LinkedIn</Text>
                </Link>
              </View>
            </Section>
            <Section title={titles.about}>
              <View style={styles.about}>{about}</View>
            </Section>
          </View>
          <View style={styles.rightColumn}>
            <Section title={`${titles.jobs} - ${calculateTotalExperience(jobsList)}`}>
              {jobs}
            </Section>
          </View>
        </View>
      </Page>
    </Document>
  )
}
