import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image } from "./Image";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/routes";
import DashboardIcon from "@/assets/sidebar/dashboard.png";
import ReportIcon from "@/assets/sidebar/report.png";
import AdminIcon from "@/assets/sidebar/admin.png";

export function Sidebar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState();

  const menuItems = [
    {
      name: "Dashboards",
      icon: <Image src={DashboardIcon} />,
      path: routes.SIGN_IN,
    },
    { name: "Reports", icon: <Image src={ReportIcon} />, path: routes.REPORTS },
    {
      name: "Administration",
      icon: <Image src={AdminIcon} />,
      path: routes.ADMINISTRATION,
    },
  ];

  useEffect(() => {
    setActive(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <div className="w-fit bg-custom-gradient rounded-lg p-2 mb-4">
      <nav className="flex-1">
        <ul className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md font-medium",
                  active === item.name.toLowerCase() &&
                    "text-pink-800 font-bold"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
