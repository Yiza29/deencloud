
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

const Timeline = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Document Timeline</h1>
              <p className="text-gray-600 mt-1">View document history and activity timeline</p>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Document Timeline</h2>
              <p className="text-gray-600 mb-6">Track all document activities and changes over time</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Timeline;
