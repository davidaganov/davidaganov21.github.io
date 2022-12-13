import { useEffect, useState } from "react"
import styles from "./Work.module.sass"
import cn from "classnames"

import useGithubService from "../../services/githubService"
import { RepoProps } from "../../interfaces"
import { Title, Button, Card } from "../"

export const Work = (): JSX.Element => {
  const [reposList, setReposList] = useState<RepoProps[]>([])
  const [reposLoading, setReposLoading] = useState(false)
  const [selectTag, setSelectTag] = useState<string>("")
  const { loading, error, getRepos } = useGithubService()
  let sortRepos = reposList

  useEffect(() => {
    if (reposList.length === 0) onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos().then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: RepoProps[]) => {
    setReposList([...reposList, ...newRepos])
    setReposLoading(false)
  }

  const filterRepos = (tag?: string) => {
    const repos: RepoProps[] = []
    sortRepos.map((repo) => {
      if (tag) {
        if (repo.topics.filter((topic) => topic === tag).length === 1) {
          sortRepos = []
          repos.push(repo)
        }
      } else {
        repos.push(repo)
      }
    })

    sortRepos = repos
  }

  const renderTags = () => {
    const topics: string[] = []

    reposList.map((item) => {
      item.topics.map((tag) => {
        if (!topics.includes(tag)) topics.push(tag)
      })
    })

    const tags = topics.map((tag) => (
      <li key={tag}>
        <button
          className={cn(styles.tag, {
            [styles.tagActive]: tag === selectTag
          })}
          type="button"
          onClick={() => setFilter(tag)}
        >
          {tag}
        </button>
      </li>
    ))

    return <ul className={styles.tags}>{tags}</ul>
  }

  const renderItems = (tag?: string) => {
    filterRepos(tag)

    const items = sortRepos.map((item) => {
      return (
        <Card
          key={item.id}
          card={item}
        />
      )
    })

    return <ul className={styles.projects}>{items}</ul>
  }

  const setFilter = (tag: string) => {
    if (tag === selectTag) {
      setSelectTag("")
    } else {
      setSelectTag(tag)
    }
    projects = renderItems(tag)
  }

  const CardSkeleton = () => {
    const cards = []
    for (let i = 0; i < 6; i++) {
      cards.push(
        <li
          key={i}
          className={styles.skeleton}
        />
      )
    }

    return <ul className={styles.projects}>{cards}</ul>
  }

  const errorMessage = error ? <h3 className={styles.error}>Repositories not found</h3> : null
  const spinner = loading && !reposLoading ? <CardSkeleton /> : null
  const tags = renderTags()

  let projects = renderItems(selectTag)

  return (
    <section
      className={cn(styles.work, "section-ltr")}
      id="projects"
    >
      <div className="inner">
        <Title
          className={styles.title}
          number={3}
          link="#projects"
          title="Projects"
          direction="ltr"
        />

        <div className={styles.body}>
          {errorMessage}

          <div style={{ width: "100%" }}>
            {tags}

            {spinner}
            {projects}
          </div>

          {!error ? (
            <Button
              link="https://github.com/davidaganov21?tab=repositories"
              className={styles.btn}
            >
              Open GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
