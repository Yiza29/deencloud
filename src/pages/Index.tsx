
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { MetricCard } from '@/components/MetricCard';
import { DocumentCategoriesChart } from '@/components/DocumentCategoriesChart';
import { DocumentActivityChart } from '@/components/DocumentActivityChart';
import { ExpirationTimelineChart } from '@/components/ExpirationTimelineChart';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Bell, 
  Eye, 
  Search, 
  Archive, 
  HardDrive 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleScanDocument = () => {
    console.log('Scan Document clicked');
    // TODO: Implement scan document functionality
  };

  const handleBrowseAll = () => {
    console.log('Browse All clicked');
    // TODO: Implement browse all functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Keepr Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your complete document overview.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                onClick={handleScanDocument}
              >
                <Search className="h-4 w-4 mr-2" />
                Scan Document
              </Button>
              <Button 
                variant="outline"
                onClick={handleBrowseAll}
                className="cursor-pointer"
              >
                <Archive className="h-4 w-4 mr-2" />
                Browse All
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            <MetricCard
              title="Total Documents"
              value="6"
              trend="+2 this month"
              icon={FileText}
              color="blue"
            />
            <MetricCard
              title="Expiring Soon"
              value="2"
              subtitle="Need attention"
              icon={Bell}
              color="orange"
            />
            <MetricCard
              title="Security Score"
              value="92%"
              subtitle="Excellent"
              icon={Eye}
              color="green"
            />
            <MetricCard
              title="Documents Scanned"
              value="47"
              subtitle="This month"
              icon={Search}
              color="purple"
            />
            <MetricCard
              title="Storage Used"
              value="65%"
              icon={HardDrive}
              color="teal"
            />
            <MetricCard
              title="Total Views"
              value="1,284"
              subtitle="All time"
              icon={Eye}
              color="pink"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DocumentCategoriesChart />
            <DocumentActivityChart />
            <ExpirationTimelineChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
