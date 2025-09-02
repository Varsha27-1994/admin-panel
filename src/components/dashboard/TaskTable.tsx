import React, { useState } from "react";

interface Task {
  task: string;
  team: string[];
  status: string;
  color: string;
}

type FilterType = "All" | "In Progress" | "Need Review" | "Done";

const TaskTable: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("All");

  const tasks: Task[] = [
    {
      task: "Process New Hire Paperwork",
      team: ["Lamine", "Nico", "2 others"],
      status: "In Progress",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      task: "Organize and Deliver Training",
      team: ["Lamine", "Pedi"],
      status: "Need Review",
      color: "bg-blue-100 text-blue-600",
    },
    {
      task: "Address Leave Request",
      team: ["Lamine Yamal"],
      status: "Done",
      color: "bg-green-100 text-green-600",
    },
  ];

  // Simple filtering
  const filteredTasks: Task[] =
    filter === "All" ? tasks : tasks.filter((t: Task) => t.status === filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter(e.target.value as FilterType);
  };

  return (
    <div className="bg-white p-2 rounded-xl shadow-sm">
      {/* Header with filter */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Daily Task</h3>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border rounded-md text-sm px-2 py-1"
        >
          <option value="All">All</option>
          <option value="In Progress">In Progress</option>
          <option value="Need Review">Need Review</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-2">Task Name</th>
            <th className="pb-2">Team</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((t: Task, i: number) => (
            <tr key={i} className="border-t text-[10px] leading-3 font-light">
              <td className="py-2">{t.task}</td>
              <td className="py-2">{t.team.join(", ")}</td>
              <td className="py-2">
                <span className={`px-1 py-1 rounded-full text-xs ${t.color}`}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;