import dayjs from "dayjs";

export const calculateBiorhythms = (birthDate, targetDate) => {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");
  const t = targetDay.diff(birthDay, "days");

  return {
    date: targetDate,
    physical: Math.sin((2 * Math.PI * t) / 23),
    emotional: Math.sin((2 * Math.PI * t) / 28),
    intellectual: Math.sin((2 * Math.PI * t) / 33)
  };
};

export function calculateBioRhythmSeries(birthDate, startDate, size) {
  const series = [];
  const startDay = dayjs(startDate).startOf("day");
  for (let i = 0; i < size; i++) {
    const targetDate = startDay.add(i, "days").toISOString();
    series.push(calculateBiorhythms(birthDate, targetDate));
  }
  return series;
}
