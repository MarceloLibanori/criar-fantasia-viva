
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "Ana Silva",
    action: "criou um novo projeto",
    time: "2 min atrás",
    type: "create"
  },
  {
    id: 2,
    user: "João Santos",
    action: "finalizou uma tarefa",
    time: "15 min atrás",
    type: "complete"
  },
  {
    id: 3,
    user: "Maria Costa",
    action: "comentou em um relatório",
    time: "1h atrás",
    type: "comment"
  },
  {
    id: 4,
    user: "Pedro Lima",
    action: "atualizou o perfil",
    time: "2h atrás",
    type: "update"
  },
  {
    id: 5,
    user: "Sofia Alves",
    action: "enviou um arquivo",
    time: "3h atrás",
    type: "upload"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "create": return "bg-emerald-100 text-emerald-700";
    case "complete": return "bg-blue-100 text-blue-700";
    case "comment": return "bg-purple-100 text-purple-700";
    case "update": return "bg-orange-100 text-orange-700";
    case "upload": return "bg-pink-100 text-pink-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

export const ActivityFeed = () => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
              {activity.user.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-medium text-slate-900 truncate">
                {activity.user}
              </p>
              <Badge variant="secondary" className={`text-xs ${getTypeColor(activity.type)}`}>
                {activity.type}
              </Badge>
            </div>
            <p className="text-sm text-slate-600">{activity.action}</p>
            <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
