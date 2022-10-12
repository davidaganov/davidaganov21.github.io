export default function About() {
  return (
    <section
      className="about section-ltr"
      id="about"
    >
      <div className="about__inner inner">
        <h2 className="about__title section-title">
          <a href="#about">
            <span>01.</span> About Me
          </a>
        </h2>

        <div className="about__content">
          <div className="about__left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur libero
              deserunt, animi quas veritatis facilis illo numquam sed itaque accusantium rem dolore
              harum magnam{" "}
              <a
                href="#"
                className="inline-link"
              >
                ducimus nulla
              </a>{" "}
              maxime voluptas! Praesentium.
            </p>
            <p>
              Ipsum,{" "}
              <a
                href="#"
                className="inline-link"
              >
                exercitationem
              </a>{" "}
              nobis, mollitia aliquid harum saepe veritatis eius modi, consectetur vel quisquam
              voluptatem perferendis tempora?{" "}
              <a
                href="#"
                className="inline-link"
              >
                Optio
              </a>{" "}
              voluptatum explicabo pariatur veniam ducimus.
            </p>
            {/* Привет! Меня зовут Бриттани, и мне нравится создавать вещи, которые живут в Интернете. Мой интерес к веб-разработке начался еще в 2012 году, когда я решил попробовать редактировать собственные темы Tumblr — оказалось, что создание пользовательской кнопки для реблога научило меня многому в HTML и CSS!

              Перенесемся на сегодняшний день, и я имел честь работать в рекламное агентство, стартап, огромная корпорация, а также студенческая дизайн-студия. В настоящее время мое основное внимание сосредоточено на создании доступных, инклюзивных продуктов и цифрового опыта вУточнениедля самых разных клиентов.

              я тоже недавно запустил курс который охватывает все, что вам нужно для создания веб-приложения с API Spotify с использованием Node & React.

              Вот несколько технологий, с которыми я недавно работал: */}
          </div>
          <div className="about__right">
            <div className="about__picture"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
