interface Button {
  link: string
  value: string
  classes: string
}

export default function Button({ value, classes, link }: Button) {
  return (
    <a
      href={link}
      className={`btn ${classes}`}
    >
      {value}
    </a>
  )
}
