import { Link, useLocation } from "react-router-dom";
import { Image } from "@/components/Image";
import DashboardIcon from "@/assets/sidebar/dashboard.png";
import ReportIcon from "@/assets/sidebar/report.png";
import AdminIcon from "@/assets/sidebar/admin.png";
import { routes } from "@/lib/routes";

export function HeaderBar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case routes.DASHBOARDS:
        return "Dashboards";
      case routes.REPORTS:
        return "Reports";
      case routes.ADMINISTRATION:
        return "Administration";
      default:
        return routes.DASHBOARDS;
    }
  };

  return (
    <div className="h-16 flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold text-gray-800">{getTitle()}</h1>

      <div className="flex items-center space-x-4">
        <Link
          to={routes.DASHBOARDS}
          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full"
        >
          <Image src={DashboardIcon} />
        </Link>
        <Link
          to={routes.REPORTS}
          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full"
        >
          <Image src={ReportIcon} className="h-8 w-8"/>
        </Link>
        <Link
          to={routes.ADMINISTRATION}
          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full"
        >
          <Image src={AdminIcon} />
        </Link>
      </div>
    </div>
  );
}
