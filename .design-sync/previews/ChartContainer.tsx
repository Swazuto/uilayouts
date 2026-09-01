import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, type ChartConfig } from '../../packages/shadcn/src/ui/charts';

const data = [
  { month: 'Jan', revenue: 18400 },
  { month: 'Feb', revenue: 21200 },
  { month: 'Mar', revenue: 19800 },
  { month: 'Apr', revenue: 24600 },
  { month: 'May', revenue: 27100 },
  { month: 'Jun', revenue: 25300 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#2563eb',
  },
} satisfies ChartConfig;

export function Default() {
  return (
    <div style={{ maxWidth: 480 }}>
      <ChartContainer config={chartConfig} style={{ height: 260, width: '100%' }}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
