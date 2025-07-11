
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Bell, Plus, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Reminders = () => {
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
              <h1 className="text-2xl font-bold text-gray-900">Document Reminders</h1>
              <p className="text-gray-600 mt-1">Track expiration dates and important deadlines</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Add Reminder
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Reminders & Notifications</h2>
              <p className="text-gray-600 mb-6">Never miss an important document deadline</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reminders;
