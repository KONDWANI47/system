import { Link, useLocation } from "react-router-dom";
import { GraduationCap, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/class/std-1", label: "Standard 1", icon: GraduationCap },
    { path: "/class/std-2", label: "Standard 2", icon: GraduationCap },
    { path: "/class/std-3", label: "Standard 3", icon: GraduationCap },
    { path: "/class/std-4", label: "Standard 4", icon: GraduationCap },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <GraduationCap className="h-8 w-8 text-primary" />
        <span className="ml-3 text-xl font-bold text-foreground">UCD School</span>
      </div>
      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
