import React from "react";
import { Users, CheckCircle, Briefcase } from "lucide-react";

interface KPIData {
  id: string;
  label: string;
  value: number;
  change: string;
  color: string;
  bg: string;
  icon: React.ReactNode;
}

const KPICards: React.FC = () => {
  const data: KPIData[] = [
    {
      id: "open jobs",
      label: "Open Jobs",
      value: 298,
      change: "+25.2%",
      color: "text-green-500",
      bg: "bg-red-100",
      icon: <Users className="w-6 h-6 text-red-500" />,
    },
    {
      id: "applicants",
      label: "Applicants",
      value: 158,
      change: "+20.2%",
      color: "text-blue-500",
      bg: "bg-blue-100",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      id: "interviewed",
      label: "Interviewed",
      value: 89,
      change: "+15.7%",
      color: "text-purple-500",
      bg: "bg-purple-100",
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
    },
    {
      id: "hired",
      label: "Hired",
      value: 24,
      change: "-32.4%",
      color: "text-green-500",
      bg: "bg-green-100",
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      {data.map((item: KPIData) => (
        <div
          key={item.id}
          className="bg-white px-4 py-2 rounded-xl shadow-sm border flex items-center space-x-4"
        >
          <div className={`p-3 rounded-lg ${item.bg}`}>{item.icon}</div>
          <div>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-lg font-semibold">{item.value}</p>
            <p className={`text-xs ${item.color}`}>{item.change} last month</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
