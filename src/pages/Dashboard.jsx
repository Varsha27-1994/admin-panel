import React from "react";
import Layout from "../components/common/Layout";
import KPICards from "../components/dashboard/KPICards";
import TrendsChart from "../components/dashboard/TrendsChart";
import TaskTable from "../components/dashboard/TaskTable";
import RecentActivities from "../components/dashboard/RecentActivities";
const Dashboard = () => {
  return (
    <>
      <div className="space-y-2">
        <KPICards />
        <div className="grid grid-cols-4 gap-x-3">
          {" "}
          <div className="col-span-3">
            <TrendsChart />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              {" "}
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
