
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Eye, 
  Scan, 
  Archive, 
  Bell, 
  CalendarDays, 
  FileText, 
  Settings,
  LayoutDashboard 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', path: '/' },
  { icon: Scan, label: 'Scanner', id: 'scanner', path: '/scanner' },
  { icon: Archive, label: 'Organizer', id: 'organizer', path: '/organizer' },
  { icon: Bell, label: 'Reminders', id: 'reminders', path: '/reminders' },
  { icon: CalendarDays, label: 'Timeline', id: 'timeline', path: '/timeline' },
  { icon: Settings, label: 'Settings', id: 'settings', path: '/settings' },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveItem = () => {
    const currentItem = navigationItems.find(item => item.path === location.pathname);
    return currentItem ? currentItem.id : 'dashboard';
  };

  const handleItemClick = (item: typeof navigationItems[0]) => {
    console.log(`Navigating to: ${item.id}`);
    navigate(item.path);
  };

  const activeItem = getActiveItem();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            {!collapsed && (
              <span className="text-xl font-bold text-gray-900 font-playfair">Keepr</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant={activeItem === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-11 transition-all duration-200 cursor-pointer",
                collapsed ? "px-3" : "px-4",
                activeItem === item.id
                  ? "bg-indigo-600 text-white hover:bg-indigo-700" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
              onClick={() => handleItemClick(item)}
            >
              <item.icon className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={onToggle}
            className="w-full h-11 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <span className={cn("transition-transform duration-300", collapsed ? "rotate-180" : "")}>
              ←
            </span>
            {!collapsed && <span className="ml-3">Collapse</span>}
          </Button>
        </div>
      </div>
    </div>
  );
}
