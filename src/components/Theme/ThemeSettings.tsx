// import React, { useState, useEffect } from "react";
// import { useTheme } from "../../hooks/ThemeContext.tsx";
// import PaletteIcon from "@mui/icons-material/Palette";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import SaveIcon from "@mui/icons-material/Save";

// interface ColorOption {
//   name: string;
//   value: string;
//   preview: string;
// }

// interface UserData {
//   data: {
//     name?: string;
//     email: string;
//     role: string;
//   };
// }

// const primaryColorOptions: ColorOption[] = [
//   { name: "Default Blue", value: "#1F2F4A", preview: "bg-[#1F2F4A]" },
//   { name: "Dark Navy", value: "#0F172A", preview: "bg-slate-900" },
//   { name: "Purple", value: "#581C87", preview: "bg-purple-900" },
//   { name: "Green", value: "#14532D", preview: "bg-green-900" },
//   { name: "Red", value: "#7F1D1D", preview: "bg-red-900" },
//   { name: "Orange", value: "#9A3412", preview: "bg-orange-800" },
//   { name: "Teal", value: "#134E4A", preview: "bg-teal-900" },
//   { name: "Indigo", value: "#312E81", preview: "bg-indigo-900" },
// ];

// const secondaryColorOptions: ColorOption[] = [
//   { name: "Light Gray", value: "#F3F4F6", preview: "bg-gray-100" },
//   {
//     name: "White",
//     value: "#FFFFFF",
//     preview: "bg-white border border-gray-200",
//   },
//   { name: "Light Blue", value: "#EFF6FF", preview: "bg-blue-50" },
//   { name: "Light Green", value: "#F0FDF4", preview: "bg-green-50" },
//   { name: "Light Purple", value: "#FAF5FF", preview: "bg-purple-50" },
//   { name: "Light Yellow", value: "#FFFBEB", preview: "bg-amber-50" },
//   { name: "Light Pink", value: "#FDF2F8", preview: "bg-pink-50" },
//   { name: "Light Cyan", value: "#ECFEFF", preview: "bg-cyan-50" },
// ];

// const ThemeSettings: React.FC = () => {
//   const { colors, updateColors, resetToDefault } = useTheme();
//   const [tempColors, setTempColors] = useState(colors);
//   const [saveMessage, setSaveMessage] = useState("");
//   const [user, setUser] = useState<UserData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) {
//         setUser(JSON.parse(stored) as UserData);
//       }
//     } catch (err) {
//       console.error("Error parsing user:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const handleSave = () => {
//     updateColors(tempColors);
//     setSaveMessage("Theme saved successfully!");
//     setTimeout(() => setSaveMessage(""), 3000);
//   };

//   const handleReset = () => {
//     resetToDefault();
//     setTempColors({ primary: "#1F2F4A", secondary: "#F3F4F6" });
//     setSaveMessage("Theme reset to default!");
//     setTimeout(() => setSaveMessage(""), 3000);
//   };

//   const hasChanges =
//     tempColors.primary !== colors.primary ||
//     tempColors.secondary !== colors.secondary;

//   const userName = user?.data.name ?? "Guest";
//   const userRole = user?.data.role ?? "Unknown Role";
//   const userEmail = user?.data.email ?? "";

//   if (userRole == "admin" || userRole == "recruiter") {
//     return (
//       <div className="max-w-4xl mx-auto p-4">
//         {/* Page Header */}
//         <div className="mb-4">
//           <div className="flex items-center justify-between mb-1">
//             <div className="flex items-center space-x-2">
//               <PaletteIcon className="text-gray-600 text-2xl" />
//               <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
//             </div>
//             <div className="text-right">
//               <div className="text-sm text-gray-500">Logged in as:</div>
//               <div className="font-semibold text-gray-800">{userName}</div>
//               <span className="text-xs capitalize rounded-full bg-blue-100 px-2 py-0.5">
//                 {userRole}
//               </span>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">
//             Customize your application theme by choosing primary and secondary
//             colors.
//           </p>
//         </div>

//         {/* Save Message */}
//         {saveMessage && (
//           <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-sm">
//             <p className="text-green-800">{saveMessage}</p>
//           </div>
//         )}

//         <div className="bg-white rounded-lg shadow p-4 mb-4">
//           {/* Preview Section */}
//           <div className="mb-4">
//             <h2 className="text-base font-semibold text-gray-900 mb-2">
//               Theme Preview
//             </h2>
//             <div className="border border-gray-200 rounded overflow-hidden shadow-sm">
//               {/* Nav Preview */}
//               <div
//                 className="h-10 flex items-center px-3"
//                 style={{ backgroundColor: tempColors.primary }}
//               >
//                 <span className="text-white font-semibold text-sm">
//                   Navigation Bar
//                 </span>
//                 <div className="ml-auto flex items-center space-x-2">
//                   <div className="w-5 h-5 bg-white/20 rounded"></div>
//                   <div className="w-5 h-5 bg-white/20 rounded"></div>
//                 </div>
//               </div>
//               {/* Content Preview */}
//               <div
//                 className="h-16 flex items-center justify-center"
//                 style={{ backgroundColor: tempColors.secondary }}
//               >
//                 <div className="text-center">
//                   <div className="w-24 h-1.5 bg-gray-300 rounded mb-1.5 mx-auto"></div>
//                   <div className="w-20 h-1.5 bg-gray-300 rounded mx-auto"></div>
//                   <p className="text-gray-600 mt-1 text-xs">
//                     Main Content Area
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Color Selection Grid */}
//           <div className="grid lg:grid-cols-2 gap-4">
//             {/* Primary Color Selection */}
//             <div className="space-y-3">
//               <h2 className="text-base font-semibold text-gray-900">
//                 Primary Color (Navigation)
//               </h2>

//               <div className="grid grid-cols-4 gap-1.5">
//                 {primaryColorOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     onClick={() =>
//                       setTempColors((prev) => ({
//                         ...prev,
//                         primary: option.value,
//                       }))
//                     }
//                     className={`p-1 rounded border text-xs font-medium transition-all ${
//                       tempColors.primary === option.value
//                         ? "border-blue-500 ring-1 ring-blue-200 shadow"
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                   >
//                     <div
//                       className={`w-full h-6 rounded mb-0.5 ${option.preview}`}
//                     ></div>
//                     <span className="text-gray-700 text-xs">{option.name}</span>
//                   </button>
//                 ))}
//               </div>

//               {/* Custom Primary Color */}
//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Custom primary color:
//                 </label>
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="color"
//                     value={tempColors.primary}
//                     onChange={(e) =>
//                       setTempColors((prev) => ({
//                         ...prev,
//                         primary: e.target.value,
//                       }))
//                     }
//                     className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
//                   />
//                   <input
//                     type="text"
//                     value={tempColors.primary}
//                     onChange={(e) =>
//                       setTempColors((prev) => ({
//                         ...prev,
//                         primary: e.target.value,
//                       }))
//                     }
//                     className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
//                     placeholder="#1F2F4A"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Secondary Color Selection */}
//             <div className="space-y-3">
//               <h2 className="text-base font-semibold text-gray-900">
//                 Secondary Color (Main Content)
//               </h2>

//               <div className="grid grid-cols-4 gap-1.5">
//                 {secondaryColorOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     onClick={() =>
//                       setTempColors((prev) => ({
//                         ...prev,
//                         secondary: option.value,
//                       }))
//                     }
//                     className={`p-1 rounded border text-xs font-medium transition-all ${
//                       tempColors.secondary === option.value
//                         ? "border-blue-500 ring-1 ring-blue-200 shadow"
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                   >
//                     <div
//                       className={`w-full h-6 rounded mb-0.5 ${option.preview}`}
//                     ></div>
//                     <span className="text-gray-700 text-xs">{option.name}</span>
//                   </button>
//                 ))}
//               </div>

//               {/* Custom Secondary Color */}
//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Custom secondary color:
//                 </label>
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="color"
//                     value={tempColors.secondary}
//                     onChange={(e) =>
//                       setTempColors((prev) => ({
//                         ...prev,
//                         secondary: e.target.value,
//                       }))
//                     }
//                     className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
//                   />
//                   <input
//                     type="text"
//                     value={tempColors.secondary}
//                     onChange={(e) =>
//                       setTempColors((prev) => ({
//                         ...prev,
//                         secondary: e.target.value,
//                       }))
//                     }
//                     className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
//                     placeholder="#F3F4F6"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50 rounded">
//           <button
//             onClick={handleReset}
//             className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-white transition-colors text-sm"
//           >
//             <RefreshIcon fontSize="small" />
//             <span>Reset to Default</span>
//           </button>

//           <button
//             onClick={handleSave}
//             disabled={!hasChanges}
//             className={`flex items-center space-x-1 px-4 py-2 rounded font-medium transition-colors text-sm ${
//               hasChanges
//                 ? "bg-blue-600 text-white hover:bg-blue-700"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             <SaveIcon fontSize="small" />
//             <span>Save Theme</span>
//           </button>
//         </div>
//       </div>
//     );
//   }
// };

// export default ThemeSettings;

import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/ThemeContext.tsx";
import PaletteIcon from "@mui/icons-material/Palette";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";

interface ColorOption {
  name: string;
  value: string;
  preview: string;
}

interface UserData {
  data: {
    name?: string;
    email: string;
    role: string;
  };
}

const primaryColorOptions: ColorOption[] = [
  { name: "Default Blue", value: "#1F2F4A", preview: "bg-[#1F2F4A]" },
  { name: "Dark Navy", value: "#0F172A", preview: "bg-slate-900" },
  { name: "Purple", value: "#581C87", preview: "bg-purple-900" },
  { name: "Green", value: "#14532D", preview: "bg-green-900" },
  { name: "Red", value: "#7F1D1D", preview: "bg-red-900" },
  { name: "Orange", value: "#9A3412", preview: "bg-orange-800" },
  { name: "Teal", value: "#134E4A", preview: "bg-teal-900" },
  { name: "Indigo", value: "#312E81", preview: "bg-indigo-900" },
];

const secondaryColorOptions: ColorOption[] = [
  { name: "Light Gray", value: "#F3F4F6", preview: "bg-gray-100" },
  {
    name: "White",
    value: "#FFFFFF",
    preview: "bg-white border border-gray-200",
  },
  { name: "Light Blue", value: "#EFF6FF", preview: "bg-blue-50" },
  { name: "Light Green", value: "#F0FDF4", preview: "bg-green-50" },
  { name: "Light Purple", value: "#FAF5FF", preview: "bg-purple-50" },
  { name: "Light Yellow", value: "#FFFBEB", preview: "bg-amber-50" },
  { name: "Light Pink", value: "#FDF2F8", preview: "bg-pink-50" },
  { name: "Light Cyan", value: "#ECFEFF", preview: "bg-cyan-50" },
];

const ThemeSettings: React.FC = () => {
  const { colors, updateColors, resetToDefault } = useTheme();
  const [tempColors, setTempColors] = useState(colors);
  const [saveMessage, setSaveMessage] = useState("");
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored) as UserData);
      }
    } catch (err) {
      console.error("Error parsing user:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSave = () => {
    updateColors(tempColors);
    setSaveMessage("Theme saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleReset = () => {
    resetToDefault();
    setTempColors({ primary: "#1F2F4A", secondary: "#F3F4F6" });
    setSaveMessage("Theme reset to default!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const hasChanges =
    tempColors.primary !== colors.primary ||
    tempColors.secondary !== colors.secondary;

  const userName = user?.data?.name ?? "Guest";
  const userRole = user?.data?.role ?? "Unknown Role";
  const userEmail = user?.data?.email ?? "";

  return (
    <div className="max-w-4xl mx-auto ">
      {/* Page Header */}
      <div className="">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            <PaletteIcon className="text-gray-600 text-2xl" />
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
          {/* <div className="text-right">
            <div className="text-sm text-gray-500">Logged in as:</div>
            <div className="font-semibold text-gray-800">{userName}</div>
            <span className="text-xs capitalize rounded-full bg-blue-100 px-2 py-0.5">
              {userRole}
            </span>
          </div> */}
        </div>
        <p className="text-gray-600 text-sm">
          Customize your application theme by choosing primary and secondary
          colors.
        </p>
      </div>

      {/* Save Message */}
      {saveMessage && (
        <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-sm">
          <p className="text-green-800">{saveMessage}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-2">
        {/* Preview Section */}
        <div className="">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Theme Preview
          </h2>
          <div className="border border-gray-200 rounded overflow-hidden shadow-sm">
            {/* Nav Preview */}
            <div
              className="h-10 flex items-center px-3"
              style={{ backgroundColor: tempColors.primary }}
            >
              <span className="text-white font-semibold text-sm">
                Navigation Bar
              </span>
              <div className="ml-auto flex items-center space-x-2">
                <div className="w-5 h-5 bg-white/20 rounded"></div>
                <div className="w-5 h-5 bg-white/20 rounded"></div>
              </div>
            </div>
            {/* Content Preview */}
            <div
              className="h-12 flex items-center justify-center"
              style={{ backgroundColor: tempColors.secondary }}
            >
              <div className="text-center">
                <div className="w-24 h-1.5 bg-gray-300 rounded mb-1.5 mx-auto"></div>
                <div className="w-20 h-1.5 bg-gray-300 rounded mx-auto"></div>
                <p className="text-gray-600 mt-1 text-xs">Main Content Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Selection Grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Primary Color Selection */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">
              Primary Color (Navigation)
            </h2>

            <div className="grid grid-cols-4 gap-1.5">
              {primaryColorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setTempColors((prev) => ({
                      ...prev,
                      primary: option.value,
                    }))
                  }
                  className={`p-1 rounded border text-xs font-medium transition-all ${
                    tempColors.primary === option.value
                      ? "border-blue-500 ring-1 ring-blue-200 shadow"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-full h-6 rounded mb-0.5 ${option.preview}`}
                  ></div>
                  <span className="text-gray-700 text-xs">{option.name}</span>
                </button>
              ))}
            </div>

            {/* Custom Primary Color */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Custom primary color:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={tempColors.primary}
                  onChange={(e) =>
                    setTempColors((prev) => ({
                      ...prev,
                      primary: e.target.value,
                    }))
                  }
                  className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={tempColors.primary}
                  onChange={(e) =>
                    setTempColors((prev) => ({
                      ...prev,
                      primary: e.target.value,
                    }))
                  }
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  placeholder="#1F2F4A"
                />
              </div>
            </div>
          </div>

          {/* Secondary Color Selection */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">
              Secondary Color (Main Content)
            </h2>

            <div className="grid grid-cols-4 gap-1.5">
              {secondaryColorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setTempColors((prev) => ({
                      ...prev,
                      secondary: option.value,
                    }))
                  }
                  className={`p-1 rounded border text-xs font-medium transition-all ${
                    tempColors.secondary === option.value
                      ? "border-blue-500 ring-1 ring-blue-200 shadow"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-full h-6 rounded mb-0.5 ${option.preview}`}
                  ></div>
                  <span className="text-gray-700 text-xs">{option.name}</span>
                </button>
              ))}
            </div>

            {/* Custom Secondary Color */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Custom secondary color:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={tempColors.secondary}
                  onChange={(e) =>
                    setTempColors((prev) => ({
                      ...prev,
                      secondary: e.target.value,
                    }))
                  }
                  className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={tempColors.secondary}
                  onChange={(e) =>
                    setTempColors((prev) => ({
                      ...prev,
                      secondary: e.target.value,
                    }))
                  }
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  placeholder="#F3F4F6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50 rounded">
        <button
          onClick={handleReset}
          className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-white transition-colors text-sm"
        >
          <RefreshIcon fontSize="small" />
          <span>Reset to Default</span>
        </button>

        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className={`flex items-center space-x-1 px-4 py-2 rounded font-medium transition-colors text-sm ${
            hasChanges
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <SaveIcon fontSize="small" />
          <span>Save Theme</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;