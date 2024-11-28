// Функция переводит формат даты для атрибута dateTime у тега <time>
export const createDatetimeForTag = (date) => {
  return date.split(".").reverse().join("-");
};
