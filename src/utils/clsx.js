// Функция для объединения модульных стилей
export const clsx = (...arr) => {
  return arr.filter(Boolean).join(" ");
};
