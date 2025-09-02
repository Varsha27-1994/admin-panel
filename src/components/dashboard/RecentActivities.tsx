import React, { useState } from "react";

interface Activity {
  id: number;
  text: string;
  time: string;
}

type FilterType = "all" | "jobs" | "interviews" | "applicants";

const RecentActivities: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  
  const activities: Activity[] = [
    { id: 1, text: "New job posted: Senior Developer", time: "2 hours ago" },
    { id: 2, text: "Interview scheduled: Jane Doe", time: "1 day ago" },
    { id: 3, text: "New applicant: John Smith", time: "3 days ago" },
    { id: 4, text: "Job closed: Junior Designer", time: "5 days ago" },
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter(e.target.value as FilterType);
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-semibold mb-2">Recent Activities</h3>
      <div className="mb-2">
        <select
          className="w-full p-2 text-xs border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="jobs">Jobs</option>
          <option value="interviews">Interviews</option>
          <option value="applicants">Applicants</option>
        </select>
      </div>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {activities
          .filter(
            (activity: Activity) =>
              filter === "all" ||
              (filter === "jobs" && activity.text.includes("job")) ||
              (filter === "interviews" &&
                activity.text.includes("Interview")) ||
              (filter === "applicants" && activity.text.includes("applicant"))
          )
          .map((activity: Activity) => (
            <div
              key={activity.id}
              className="flex text-[10px] leading-3 font-light items-start space-x-2"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
              <div>
                <p className="text-xs text-gray-900">{activity.text}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentActivities;