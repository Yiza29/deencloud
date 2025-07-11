
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color: 'blue' | 'orange' | 'green' | 'purple' | 'teal' | 'pink';
  trend?: string;
}

const colorClasses = {
  blue: 'bg-blue-500 text-white',
  orange: 'bg-orange-500 text-white',
  green: 'bg-green-500 text-white',
  purple: 'bg-purple-500 text-white',
  teal: 'bg-teal-500 text-white',
  pink: 'bg-pink-500 text-white',
};

export function MetricCard({ title, value, subtitle, icon: Icon, color, trend }: MetricCardProps) {
  return (
    <div className={cn(
      "rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg",
      colorClasses[color]
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm opacity-90 mb-1">{title}</p>
          <p className="text-3xl font-bold mb-1">{value}</p>
          {subtitle && (
            <p className="text-sm opacity-80">{subtitle}</p>
          )}
          {trend && (
            <p className="text-xs opacity-70 mt-2">{trend}</p>
          )}
        </div>
        <Icon className="h-8 w-8 opacity-80" />
      </div>
    </div>
  );
}
