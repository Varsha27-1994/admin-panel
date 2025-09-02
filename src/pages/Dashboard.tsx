import React from "react";
import Layout from "../components/common/Layout.tsx";
import KPICards from "../components/dashboard/KPICards.tsx";
import TrendsChart from "../components/dashboard/TrendsChart.tsx";
import TaskTable from "../components/dashboard/TaskTable.tsx";
import RecentActivities from "../components/dashboard/RecentActivities.tsx";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="space-y-2">
        <KPICards />
        <div className="grid grid-cols-4 gap-x-3">
          <div className="col-span-3">
            <TrendsChart />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <TaskTable />
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
