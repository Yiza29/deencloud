
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { period: 'Next 7 days', count: 0 },
  { period: 'Next 30 days', count: 0 },
  { period: 'Next 90 days', count: 1 },
  { period: 'Next 6 months', count: 2 },
];

export function ExpirationTimelineChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Expiration Timeline</h3>
      <p className="text-sm text-gray-600 mb-6">Documents expiring in different timeframes</p>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="horizontal">
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis 
              type="category" 
              dataKey="period" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              width={100}
            />
            <Bar dataKey="count" fill="#F59E0B" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
