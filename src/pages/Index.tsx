
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign,
  Activity,
  Calendar,
  Bell,
  Settings
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/StatsCard";
import { RevenueChart } from "@/components/RevenueChart";
import { ActivityFeed } from "@/components/ActivityFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
            <div className="px-6 py-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-slate-600 mt-1">Bem-vindo de volta! Aqui está um resumo das suas métricas.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="hover:bg-slate-50">
                  <Calendar className="w-4 h-4 mr-2" />
                  Hoje
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-slate-50">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-slate-50">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Receita Total"
                value="R$ 45.231"
                change="+20.1%"
                icon={DollarSign}
                color="emerald"
              />
              <StatsCard
                title="Usuários Ativos"
                value="2.350"
                change="+12.5%"
                icon={Users}
                color="blue"
              />
              <StatsCard
                title="Taxa de Conversão"
                value="3.24%"
                change="+5.2%"
                icon={TrendingUp}
                color="purple"
              />
              <StatsCard
                title="Atividade Diária"
                value="1.423"
                change="+8.7%"
                icon={Activity}
                color="orange"
              />
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      Receita dos Últimos 6 Meses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RevenueChart />
                  </CardContent>
                </Card>
              </div>

              {/* Activity Feed */}
              <div>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-green-600" />
                      Atividade Recente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ActivityFeed />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex-col gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <Users className="w-6 h-6" />
                    Gerenciar Usuários
                  </Button>
                  <Button className="h-20 flex-col gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <BarChart3 className="w-6 h-6" />
                    Ver Relatórios
                  </Button>
                  <Button className="h-20 flex-col gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    <Settings className="w-6 h-6" />
                    Configurações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
