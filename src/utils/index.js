export const dateFormatter = (dateString, locale = 'pt-BR') => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale).format(date);
}

export const getDayDate = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
}