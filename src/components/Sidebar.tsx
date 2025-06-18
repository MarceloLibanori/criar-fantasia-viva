
import { Button } from "@/components/ui/button";
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings,
  FileText,
  Calendar,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics" },
    { icon: Users, label: "Usuários" },
    { icon: FileText, label: "Relatórios" },
    { icon: Calendar, label: "Agenda" },
    { icon: MessageSquare, label: "Mensagens" },
    { icon: Settings, label: "Configurações" },
  ];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white border-r border-slate-200 transition-all duration-300 z-20",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hover:bg-slate-100"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 transition-all duration-200",
              isCollapsed ? "px-2" : "px-3",
              item.active 
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:from-blue-700 hover:to-blue-800" 
                : "hover:bg-slate-100 text-slate-700"
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>{item.label}</span>}
          </Button>
        ))}
      </nav>

      {/* User Profile */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-3 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">Usuário</p>
                <p className="text-xs text-slate-500 truncate">usuario@exemplo.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
