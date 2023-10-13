import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import { ProjectsListProps } from "./ProjectsList.props"
import styles from "./ProjectsList.module.sass"

import { CardProject } from ".."

export const ProjectsList = ({ projectsList }: ProjectsListProps) => {
  const { t } = useTranslation()

  const renderItems = () => {
    if (projectsList) {
      const items = projectsList.map((item) => {
        return (
          <SwiperSlide
            key={item.name}
            style={{ height: "auto" }}
          >
            <CardProject card={item} />
          </SwiperSlide>
        )
      })

      return (
        <Swiper
          className={styles.projects}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 769: { slidesPerView: 2 } }}
          navigation={{
            nextEl: ".projects-btn-next",
            prevEl: ".projects-btn-prev"
          }}
        >
          {items}
        </Swiper>
      )
    }
  }

  const renderError = () => {
    return (
      <>
        <p className={styles.empty}>{t("projects.errorTitle")}</p>
        <p className={styles.emptySubtitle}>{t("projects.errorSubtitle")}</p>
      </>
    )
  }

  const projects = renderItems()
  const error = projects === undefined ? renderError() : null

  return (
    <div className={styles.container}>
      {projects}
      {error}
    </div>
  )
}
