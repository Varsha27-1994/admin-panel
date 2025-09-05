import React, { useState, useEffect } from "react";

interface Stage {
  label: string;
  color: string;
}

interface Job {
  title: string;
  total: number;
  stages: Stage[];
}

const jobsData: Job[] = [
  {
    title: "Design Head",
    total: 88,
    stages: [
      { label: "18 Candidates", color: "bg-red-100 text-black" },
      { label: "8 Candidates", color: "bg-red-100 text-black" },
      { label: "3 Candidates", color: "bg-red-200 text-black" },
      { label: "", color: "bg-red-50" },
      { label: "", color: "bg-red-50" },
    ],
  },
  {
    title: "Art Lead",
    total: 88,
    stages: [
      { label: "16 Candidates", color: "bg-green-100 text-black" },
      { label: "10 Candidates", color: "bg-green-100 text-black" },
      { label: "", color: "bg-green-50" },
      { label: "", color: "bg-green-50" },
      { label: "", color: "bg-green-50" },
    ],
  },
  {
    title: "Product Designer",
    total: 88,
    stages: [
      { label: "88 Candidates", color: "bg-cyan-100 text-black" },
      { label: "60 Candidates", color: "bg-cyan-100 text-black" },
      { label: "30 Candidates", color: "bg-cyan-200 text-black" },
      { label: "", color: "bg-cyan-50" },
      { label: "", color: "bg-cyan-50" },
    ],
  },
  {
    title: "Junior UI Designer",
    total: 88,
    stages: [
      { label: "12 Candidates", color: "bg-yellow-100 text-black" },
      { label: "10 Candidates", color: "bg-yellow-100 text-black" },
      { label: "6 Candidates", color: "bg-yellow-200 text-black" },
      { label: "", color: "bg-yellow-50" },
      { label: "", color: "bg-yellow-50" },
    ],
  },
  {
    title: "3D Artist",
    total: 88,
    stages: [
      { label: "102 Candidates", color: "bg-purple-100 text-black" },
      { label: "78 Candidates", color: "bg-purple-100 text-black" },
      { label: "", color: "bg-purple-50" },
      { label: "", color: "bg-purple-50" },
      { label: "", color: "bg-purple-50" },
    ],
  },
  {
    title: "UX Researcher",
    total: 88,
    stages: [
      { label: "90 Candidates", color: "bg-blue-100 text-black" },
      { label: "83 Candidates", color: "bg-blue-100 text-black" },
      { label: "60 Candidates", color: "bg-blue-200 text-black" },
      { label: "", color: "bg-blue-50" },
      { label: "", color: "bg-blue-50" },
    ],
  },
];

// Skeleton Row for loading effect
const SkeletonRow: React.FC = () => (
  <div className="grid grid-cols-6 items-center py-2 animate-pulse">
    <div className="h-4 w-24 bg-gray-200 rounded"></div>
    <div className="h-6 w-20 bg-gray-200 rounded"></div>
    <div className="h-6 w-20 bg-gray-200 rounded"></div>
    <div className="h-6 w-20 bg-gray-200 rounded"></div>
    <div className="h-6 w-20 bg-gray-200 rounded"></div>
    <div className="h-6 w-20 bg-gray-200 rounded"></div>
  </div>
);

export const HiringPipeline: React.FC = () => {
const [loading, setLoading] = useState<boolean>(true);


  // Simulate API call
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" rounded-2xl shadow px-4 pt-1 w-full h-[250px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <h2 className="text-lg font-semibold text-black">Hiring</h2>
        <div className="flex items-center gap-2 text-gray-800">
          <select className="border rounded-lg px-3 text-xs py-1">
            <option>Design</option>
            <option>Marketing</option>
            <option>Engineering</option>
          </select>
          <button className="text-xs font-medium px-3 py-1 border rounded-lg">
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="min-w-[650px] overflow-auto flex-1 scroll-hidden">
        {/* Table Header (sticky inside scroll) */}
        <div className="grid grid-cols-6 text-sm font-medium text-gray-500 border-b py-2 sticky top-0 bg-white z-10">
          <div>Jobs</div>
          <div>New Applied</div>
          <div>Screening</div>
          <div>Interview</div>
          <div>Test</div>
          <div>Hired</div>
        </div>

        {/* Rows */}
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i: number) => <SkeletonRow key={i} />)
          : jobsData.map((job: Job, idx: number) => (
              <div
                key={idx}
                className="grid grid-cols-6 items-center py-2 text-sm border-b last:border-none text-gray-900"
              >
                {/* Job Name */}
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-xs text-gray-500">
                    TOTAL APPLICATION {job.total}
                  </p>
                </div>

                {/* Stages */}
                {job.stages.map((stage: Stage, sIdx: number) => (
                  <div key={sIdx}>
                    <span
                      className={`px-2 py-2 rounded-md text-xs min-h-[36px] w-[100px] min-w-[80px] font-medium flex items-center justify-center ${stage.color}`}
                    >
                      {stage.label || ""}
                    </span>
                  </div>
                ))}
              </div>
            ))}
      </div>
    </div>
  );
};

export default HiringPipeline;
