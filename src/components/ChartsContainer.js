import React from "react";
import { useSelector } from "react-redux";
// import AreaChart from "./AreaChart";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.search);
  return (
    <div>
      <AreaChart data={data} width={900} height={300}>
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <CartesianGrid stroke="#eee" strokeDasharray="10 10" />
        <Tooltip></Tooltip>
        <Area type="monotone" dataKey="count" stroke="#1e3a8a" fill="#3b82f6" />
      </AreaChart>
    </div>
  );
};

export default ChartsContainer;
