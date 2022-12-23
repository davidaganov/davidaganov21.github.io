import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import { IconText } from "../IconText/IconText"

export interface DateRangeProps {
  style: object
  startAt: string
  endAt?: string
  current?: string
}

export function formatDate(dateString: string, format = "LL/yyyy") {
  const formatString = "yyyy-MM-dd"
  const referenceDate = new Date()

  return dateFnsFormat(dateFnsParse(dateString, formatString, referenceDate), format)
}

export const DateRange = ({ startAt, endAt, current, style }: DateRangeProps): JSX.Element => {
  const dateRangeText = [formatDate(startAt), endAt ? formatDate(endAt) : current].join(" - ")

  return (
    <IconText
      style={style}
      text={dateRangeText}
      iconName="calendar"
    />
  )
}
