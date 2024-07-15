// 2024-07-24T00:00:00.000Z to 2024-06-27
export const formatToDate = (date: string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${year}-${month}-${day}`;
};

// 2024-07-24T00:00:00.000Z to 00:00
export const formatToTime = (date: string) => {
  const newDate = new Date(date);
  const hour = newDate.getHours();
  const minute =
    newDate.getMinutes() < 10
      ? `0${newDate.getMinutes()}`
      : newDate.getMinutes();
  return `${hour}:${minute}`;
};
