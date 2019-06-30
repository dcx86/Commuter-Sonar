export const getUnixTime = ({ date, time }) => {
  const [year, month, day] = date.split('-');
  const [hour, minute, second] = time.split(':');

  return new Date(year, month-1, day, hour, minute, second).getTime()
}