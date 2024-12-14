import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { chartColors, defaultChartConfig } from '../../../utils/chartConfig';
import CustomTooltip from './CustomTooltip';

const LineChartComponent = ({
  data,
  dataKey,
  xAxisKey = 'name',
  valueType,
  color = chartColors.primary
}) => {
  return (
    <ResponsiveContainer {...defaultChartConfig}>
      <LineChart data={data} margin={defaultChartConfig.margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: '#666' }}
          tickLine={{ stroke: '#666' }}
        />
        <YAxis
          tick={{ fill: '#666' }}
          tickLine={{ stroke: '#666' }}
        />
        <Tooltip content={<CustomTooltip valueType={valueType} />} />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;