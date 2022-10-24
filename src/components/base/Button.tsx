import { ButtonProps } from "../../interfaces"

export default function Button({ value, classes, link }: ButtonProps) {
  return (
    <a
      href={link}
      className={`btn ${classes}`}
    >
      {value}
    </a>
  )
}
