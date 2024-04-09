import i18next from "i18next"

export const getPluralForm = (n: number, singularKey: string, fewKey: string, manyKey: string) => {
  let formKey

  if (i18next.language === "ru") {
    if (n % 10 === 1 && n % 100 !== 11) {
      formKey = singularKey
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      formKey = fewKey
    } else {
      formKey = manyKey
    }
  } else {
    formKey = n === 1 ? singularKey : manyKey
  }

  return i18next.t(formKey)
}
