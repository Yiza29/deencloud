
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Archive, FolderPlus, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Organizer = () => {
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
              <h1 className="text-2xl font-bold text-gray-900">Document Organizer</h1>
              <p className="text-gray-600 mt-1">Organize and categorize your documents</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
                <FolderPlus className="h-4 w-4 mr-2" />
                New Folder
              </Button>
              <Button variant="outline" className="cursor-pointer">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Archive className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Document Organizer</h2>
              <p className="text-gray-600 mb-6">Create folders and organize your documents efficiently</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Organizer;
