
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: "emerald" | "blue" | "purple" | "orange";
}

const colorClasses = {
  emerald: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-700",
  blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-700",
  purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-700",
  orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-700",
};

export const StatsCard = ({ title, value, change, icon: Icon, color }: StatsCardProps) => {
  const isPositive = change.startsWith("+");
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900">{value}</p>
              <p className={cn(
                "text-sm font-medium flex items-center gap-1",
                isPositive ? "text-emerald-600" : "text-red-600"
              )}>
                {change} em relação ao mês anterior
              </p>
            </div>
          </div>
          <div className={cn(
            "w-12 h-12 rounded-lg bg-gradient-to-r flex items-center justify-center",
            colorClasses[color].split(" ")[0] + " " + colorClasses[color].split(" ")[1]
          )}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
