import React from "react";
import dayjs from "dayjs";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  ReferenceLine,
  CartesianGrid
} from "recharts";
import { calculateBioRhythmSeries } from "../calculations";
import "./BioRhythmChart.css";

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM");
}

const BioRhythmCharts = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();
  const data = calculateBioRhythmSeries(
    birthDate,
    startDate,
    31
  ).map((item) => ({ ...item, date: formatDate(item.date) }));
  return (
    <ResponsiveContainer className="bioRhythmChart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line
          type="natural"
          dot={false}
          dataKey="physical"
          className="bioRhythmChart__physical"
        />
        <Line
          type="natural"
          dot={false}
          dataKey="emotional"
          className="bioRhythmChart__emotional"
        />
        <Line
          type="natural"
          dot={false}
          dataKey="intellectual"
          className="bioRhythmChart__intellectual"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BioRhythmCharts;
