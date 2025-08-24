import { Outlet } from "react-router-dom";

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="h-10 border-b border-red-200 pt-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-end">
            <span className="mr-2">
              📞
            </span>
            <span>1-(888)-329-7069</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
