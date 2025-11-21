import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data for visualization - in a real app this would come from history state
const data = [
  { name: 'Ma', mood: 3, tasks: 4 },
  { name: 'Di', mood: 4, tasks: 6 },
  { name: 'Wo', mood: 2, tasks: 3 },
  { name: 'Do', mood: 5, tasks: 8 },
  { name: 'Vr', mood: 4, tasks: 5 },
  { name: 'Za', mood: 5, tasks: 2 },
  { name: 'Zo', mood: 4, tasks: 0 },
];

export const ChartWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-800">Je Weekoverzicht</h2>
        <p className="text-sm text-slate-500">Relatie tussen stemming en productiviteit</p>
      </div>
      
      <div className="flex-1 w-full min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              hide 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorMood)"
              name="Stemming"
            />
             <Area
              type="monotone"
              dataKey="tasks"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTasks)"
              name="Taken"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};