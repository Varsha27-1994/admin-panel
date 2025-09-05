import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import HiringPipeline from "./HiringPipeline.tsx";

interface PieDataItem {
  name: string;
  value: number;
  color: string;
}

interface LineChartDataItem {
  month: string;
  applicants: number;
}

interface StageData {
  count: number;
  color: string;
}

interface HiringDataItem {
  position: string;
  department: string;
  newApplied: StageData;
  screening: StageData;
  interview: StageData;
  test: StageData;
  hired: StageData;
}

const TrendsChart: React.FC = () => {
  const pieData: PieDataItem[] = [
    { name: "UI Designer", value: 14, color: "#6366F1" },
    { name: "Marketing", value: 27, color: "#3B82F6" },
    { name: "Graphic Design", value: 8, color: "#06B6D4" },
  ];

  const lineChartData: LineChartDataItem[] = [
    { month: "Jan", applicants: 120 },
    { month: "Feb", applicants: 160 },
    { month: "Mar", applicants: 180 },
    { month: "Apr", applicants: 110 },
    { month: "May", applicants: 200 },
    { month: "Jun", applicants: 240 },
    { month: "Jul", applicants: 280 },
    { month: "Aug", applicants: 210 },
    { month: "Sep", applicants: 250 },
    { month: "Oct", applicants: 290 },
    { month: "Nov", applicants: 270 },
    { month: "Dec", applicants: 300 },
  ];

  // Hiring pipeline data
  const hiringData: HiringDataItem[] = [
    {
      position: "Design Head",
      department: "TOTAL APPLICATION: 08",
      newApplied: { count: 18, color: "bg-red-100 text-red-600" },
      screening: { count: 8, color: "bg-orange-100 text-orange-600" },
      interview: { count: 3, color: "bg-red-100 text-red-600" },
      test: { count: 0, color: "bg-gray-100 text-gray-600" },
      hired: { count: 0, color: "bg-gray-100 text-gray-600" },
    },
    {
      position: "Art Lead",
      department: "TOTAL APPLICATION: 08",
      newApplied: { count: 16, color: "bg-orange-100 text-orange-600" },
      screening: { count: 10, color: "bg-green-100 text-green-600" },
      interview: { count: 0, color: "bg-gray-100 text-gray-600" },
      test: { count: 0, color: "bg-gray-100 text-gray-600" },
      hired: { count: 0, color: "bg-gray-100 text-gray-600" },
    },
    {
      position: "Product Designer",
      department: "TOTAL APPLICATION: 08",
      newApplied: { count: 62, color: "bg-blue-100 text-blue-600" },
      screening: { count: 60, color: "bg-green-100 text-green-600" },
      interview: { count: 30, color: "bg-orange-100 text-orange-600" },
      test: { count: 0, color: "bg-gray-100 text-gray-600" },
      hired: { count: 0, color: "bg-gray-100 text-gray-600" },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-2">
      {/* Top Row with Charts */}
      <div className="grid grid-cols-3 gap-3">
        {/* Donut Chart */}
        <div className="bg-white p-4 col-span-1 rounded-xl shadow-sm">
          <h3 className="text-sm font-semibold mb-2 text-black">Open Position</h3>
          <div className="flex items-center justify-between">
            <div className="flex-1 h-32 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    dataKey="value"
                  >
                    {pieData.map((entry: PieDataItem, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col justify-center gap-2 ml-6">
              {pieData.map((item: PieDataItem, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overview Chart */}
        <div className="bg-white px-4 p-2 col-span-2 rounded-xl shadow-sm">
          <h3 className="text-sm font-semibold mb-2 text-black">Overview</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  fontSize={10}
                />
                <YAxis axisLine={false} tickLine={false} fontSize={10} />
                <Tooltip />
                <Bar
                  dataKey="applicants"
                  fill="rgba(99, 102, 241, 0.3)"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="applicants"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={{ fill: "#6366F1" }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div>
        <HiringPipeline />
      </div>
    </div>
  );
};

export default TrendsChart;
