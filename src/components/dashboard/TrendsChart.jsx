// // import React from "react";
// // import { Doughnut, Line } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   ArcElement,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";

// // ChartJS.register(
// //   ArcElement,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // const TrendsChart = () => {
// //   const donutData = {
// //     labels: ["UI Designer", "Marketing", "Graphic Design"],
// //     datasets: [
// //       {
// //         data: [14, 27, 8],
// //         backgroundColor: ["#6366F1", "#3B82F6", "#06B6D4"],
// //         borderWidth: 0,
// //       },
// //     ],
// //   };

// //   const donutOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     cutout: "70%",
// //     plugins: {
// //       legend: {
// //         position: "bottom",
// //         labels: { boxWidth: 15, font: { size: 12 } },
// //       },
// //     },
// //   };

// //   const lineData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
// //     datasets: [
// //       {
// //         type: "bar",
// //         label: "Applicants",
// //         data: [120, 160, 180, 110, 200, 240, 280],
// //         backgroundColor: "rgba(99, 102, 241, 0.3)",
// //         borderRadius: 6,
// //       },
// //       {
// //         type: "line",
// //         label: "Applicants",
// //         data: [120, 160, 180, 110, 200, 240, 280],
// //         borderColor: "#6366F1",
// //         backgroundColor: "#6366F1",
// //         tension: 0.4,
// //         fill: false,
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //       {/* Donut Chart */}
// //       <div className="bg-white p-4 rounded-xl shadow-sm">
// //         <h3 className="text-sm font-semibold mb-2">Open Position</h3>
// //         <div className="w-48 h-48 mx-auto">
// //           <Doughnut data={donutData} options={donutOptions} />
// //         </div>
// //       </div>

// //       {/* Line + Bar Chart */}
// //       <div className="bg-white p-4 rounded-xl shadow-sm">
// //         <h3 className="text-sm font-semibold mb-2">Overview</h3>
// //         <Line data={lineData} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrendsChart;
// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   ComposedChart,
// } from "recharts";

// const TrendsChart = () => {
//   const pieData = [
//     { name: "UI Designer", value: 14, color: "#6366F1" },
//     { name: "Marketing", value: 27, color: "#3B82F6" },
//     { name: "Graphic Design", value: 8, color: "#06B6D4" },
//   ];

//   const lineChartData = [
//     { month: "Jan", applicants: 120 },
//     { month: "Feb", applicants: 160 },
//     { month: "Mar", applicants: 180 },
//     { month: "Apr", applicants: 110 },
//     { month: "May", applicants: 200 },
//     { month: "Jun", applicants: 240 },
//     { month: "Jul", applicants: 280 },
//   ];

//   // Hiring pipeline data
//   const hiringData = [
//     {
//       position: "Design Head",
//       department: "TOTAL APPLICATION: 08",
//       newApplied: { count: 18, color: "bg-red-100 text-red-600" },
//       screening: { count: 8, color: "bg-orange-100 text-orange-600" },
//       interview: { count: 3, color: "bg-red-100 text-red-600" },
//       test: { count: 0, color: "bg-gray-100 text-gray-600" },
//       hired: { count: 0, color: "bg-gray-100 text-gray-600" },
//     },
//     {
//       position: "Art Lead",
//       department: "TOTAL APPLICATION: 08",
//       newApplied: { count: 16, color: "bg-orange-100 text-orange-600" },
//       screening: { count: 10, color: "bg-green-100 text-green-600" },
//       interview: { count: 0, color: "bg-gray-100 text-gray-600" },
//       test: { count: 0, color: "bg-gray-100 text-gray-600" },
//       hired: { count: 0, color: "bg-gray-100 text-gray-600" },
//     },
//     {
//       position: "Product Designer",
//       department: "TOTAL APPLICATION: 08",
//       newApplied: { count: 62, color: "bg-blue-100 text-blue-600" },
//       screening: { count: 60, color: "bg-green-100 text-green-600" },
//       interview: { count: 30, color: "bg-orange-100 text-orange-600" },
//       test: { count: 0, color: "bg-gray-100 text-gray-600" },
//       hired: { count: 0, color: "bg-gray-100 text-gray-600" },
//     },
//     {
//       position: "Junior UI Designer",
//       department: "TOTAL APPLICATION: 08",
//       newApplied: { count: 16, color: "bg-yellow-100 text-yellow-600" },
//       screening: { count: 10, color: "bg-green-100 text-green-600" },
//       interview: { count: 6, color: "bg-yellow-100 text-yellow-600" },
//       test: { count: 0, color: "bg-gray-100 text-gray-600" },
//       hired: { count: 0, color: "bg-gray-100 text-gray-600" },
//     },
//     {
//       position: "3D Artist",
//       department: "TOTAL APPLICATION: 08",
//       newApplied: { count: 102, color: "bg-purple-100 text-purple-600" },
//       screening: { count: 78, color: "bg-green-100 text-green-600" },
//       interview: { count: 0, color: "bg-gray-100 text-gray-600" },
//       test: { count: 0, color: "bg-gray-100 text-gray-600" },
//       hired: { count: 0, color: "bg-gray-100 text-gray-600" },
//     },
//     {
//       position: "UX Researcher",
//       department: "TOTAL APPLICATION: 08",
//       newApplied: { count: 90, color: "bg-blue-100 text-blue-600" },
//       screening: { count: 83, color: "bg-green-100 text-green-600" },
//       interview: { count: 60, color: "bg-blue-100 text-blue-600" },
//       test: { count: 0, color: "bg-gray-100 text-gray-600" },
//       hired: { count: 0, color: "bg-gray-100 text-gray-600" },
//     },
//   ];

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {/* Donut Chart - Full Height */}
//       <div className="bg-white p-4 rounded-xl shadow-sm col-span-1">
//         <h3 className="text-sm font-semibold mb-2">Open Position</h3>
//         <div className="h-48">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={90}
//                 dataKey="value"
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="flex justify-center gap-4 mt-2">
//           {pieData.map((item, index) => (
//             <div key={index} className="flex items-center gap-1">
//               <div
//                 className="w-3 h-3 rounded-full"
//                 style={{ backgroundColor: item.color }}
//               ></div>
//               <span className="text-xs text-gray-600">{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Overview Chart - Smaller */}
//       <div className="bg-white p-3 rounded-xl shadow-sm col-span-1">
//         <h3 className="text-xs font-semibold mb-1">Overview</h3>
//         <div className="h-32">
//           <ResponsiveContainer width="100%" height="100%">
//             <ComposedChart data={lineChartData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis
//                 dataKey="month"
//                 axisLine={false}
//                 tickLine={false}
//                 fontSize={10}
//               />
//               <YAxis axisLine={false} tickLine={false} fontSize={10} />
//               <Tooltip />
//               <Bar
//                 dataKey="applicants"
//                 fill="rgba(99, 102, 241, 0.3)"
//                 radius={[4, 4, 0, 0]}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="applicants"
//                 stroke="#6366F1"
//                 strokeWidth={2}
//                 dot={{ fill: "#6366F1" }}
//               />
//             </ComposedChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Hiring Table - Smaller */}
//       <div className="bg-white p-3 rounded-xl shadow-sm col-span-1 w-full h-full">
//         <div className="flex justify-between items-center mb-1">
//           <h3 className="text-xs font-semibold text-gray-900">Hiring</h3>
//           <button className="text-[10px] text-gray-500 hover:text-gray-700 flex items-center gap-1">
//             VIEW
//             <svg
//               className="w-3 h-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="overflow-hidden">
//           <table className="w-full text-[10px] leading-tight">
//             <thead>
//               <tr className="text-gray-500 border-b">
//                 <th className="pb-1 pr-1">Jobs</th>
//                 <th className="pb-1 px-1">New</th>
//                 <th className="pb-1 px-1">Screen</th>
//                 <th className="pb-1 px-1">Interview</th>
//                 <th className="pb-1 px-1">Test</th>
//                 <th className="pb-1 pl-1">Hired</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {hiringData.slice(0, 3).map((job, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="py-1 pr-1">
//                     <div className="font-medium text-gray-900 truncate max-w-[80px]">
//                       {job.position}
//                     </div>
//                   </td>
//                   <td className="py-1 px-1">
//                     <span
//                       className={`px-1 py-0.5 rounded text-[9px] font-medium ${job.newApplied.color}`}
//                     >
//                       {job.newApplied.count}
//                     </span>
//                   </td>
//                   <td className="py-1 px-1">
//                     <span
//                       className={`px-1 py-0.5 rounded text-[9px] font-medium ${job.screening.color}`}
//                     >
//                       {job.screening.count}
//                     </span>
//                   </td>
//                   <td className="py-1 px-1">
//                     <span
//                       className={`px-1 py-0.5 rounded text-[9px] font-medium ${job.interview.color}`}
//                     >
//                       {job.interview.count}
//                     </span>
//                   </td>
//                   <td className="py-1 px-1">
//                     <span
//                       className={`px-1 py-0.5 rounded text-[9px] font-medium ${job.test.color}`}
//                     >
//                       {job.test.count}
//                     </span>
//                   </td>
//                   <td className="py-1 pl-1">
//                     <span
//                       className={`px-1 py-0.5 rounded text-[9px] font-medium ${job.hired.color}`}
//                     >
//                       {job.hired.count}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendsChart;
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
import HiringPipeline from "./HiringPipeline";

const TrendsChart = () => {
  const pieData = [
    { name: "UI Designer", value: 14, color: "#6366F1" },
    { name: "Marketing", value: 27, color: "#3B82F6" },
    { name: "Graphic Design", value: 8, color: "#06B6D4" },
  ];

  const lineChartData = [
    { month: "Jan", applicants: 120 },
    { month: "Feb", applicants: 160 },
    { month: "Mar", applicants: 180 },
    { month: "Apr", applicants: 110 },
    { month: "May", applicants: 200 },
    { month: "Jun", applicants: 240 },
    { month: "Jul", applicants: 280 },
  ];

  // Hiring pipeline data
  const hiringData = [
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
        {/* Donut Chart */}
        <div className="bg-white p-4 col-span-1 rounded-xl shadow-sm">
          <h3 className="text-sm font-semibold mb-2">Open Position</h3>
          <div className="h-20">
            {" "}
            {/* smaller height */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25} // smaller
                  outerRadius={40} // smaller
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <div
                  className="w-2.5 h-2.5 rounded-full" // smaller legend dot
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Overview Chart */}
        <div className="bg-white px-4 p-2 col-span-2 rounded-xl shadow-sm">
          <h3 className="text-sm font-semibold mb-2">Overview</h3>
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
      {/* Hiring Table Full Width */}
      {/* <div className="bg-white p-4 rounded-xl shadow-sm w-full min-h-[36vh]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold text-gray-900">Hiring</h3>
          <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
            VIEW
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs leading-tight">
            <thead>
              <tr className="text-gray-500 text-center border-b">
                <th className="pb-1  pr-12">Jobs</th>
                <th className="pb-1 px-1">New</th>
                <th className="pb-1 px-1">Screen</th>
                <th className="pb-1 px-1">Interview</th>
                <th className="pb-1 px-1">Test</th>
                <th className="pb-1 pl-1">Hired</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {hiringData.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50 text-center">
                  <td className="py-1  text-center">
                    <div className="font-medium text-end  text-gray-900 truncate max-w-[120px]">
                      {job.position}
                    </div>
                  </td>
                  <td className="py-1 px-1">
                    <span
                      className={`px-1 py-0.5 rounded text-[11px] font-medium ${job.newApplied.color}`}
                    >
                      {job.newApplied.count}
                    </span>
                  </td>
                  <td className="py-1 px-1">
                    <span
                      className={`px-1 py-0.5 rounded text-[11px] font-medium ${job.screening.color}`}
                    >
                      {job.screening.count}
                    </span>
                  </td>
                  <td className="py-1 px-1">
                    <span
                      className={`px-1 py-0.5 rounded text-[11px] font-medium ${job.interview.color}`}
                    >
                      {job.interview.count}
                    </span>
                  </td>
                  <td className="py-1 px-1">
                    <span
                      className={`px-1 py-0.5 rounded text-[11px] font-medium ${job.test.color}`}
                    >
                      {job.test.count}
                    </span>
                  </td>
                  <td className="py-1 pl-1">
                    <span
                      className={`px-1 py-0.5 rounded text-[11px] font-medium ${job.hired.color}`}
                    >
                      {job.hired.count}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default TrendsChart;
