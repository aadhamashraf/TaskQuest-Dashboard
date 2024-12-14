import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { chartColors, defaultChartConfig } from '../../../utils/chartConfig';

import CustomTooltip from './CustomTooltip';

const BarChartComponent = ({
  data,
  dataKey,
  xAxisKey = 'name',
  valueType,
  color = "#306efd"
}) => {
  return (
    <ResponsiveContainer {...defaultChartConfig}>
      <BarChart
        data={data}
        layout="vertical"
        margin={defaultChartConfig.margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis
          dataKey={xAxisKey}
          type="category"
          tick={{ fill: '#666', fontSize: 12 }} 
          tickLine={{ stroke: '#666' }}
          width={80} 
        />
        <XAxis
          type="number"
          tick={{ fill: '#666' }}
          tickLine={{ stroke: '#666' }}
        />
        <Tooltip content={<CustomTooltip valueType={valueType} />} />
        <Bar
          dataKey={dataKey}
          fill={color}
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
