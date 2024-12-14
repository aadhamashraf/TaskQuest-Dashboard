import { Grid } from '@mui/material';
import LineChartComponent from './layout/charts/LineChartComponent';
import BarChartComponent from './layout/charts/BarChartComponent';
import DonutChartComponent from './layout/charts/DonutChartComponent';
import DashboardCard from './layout/metrics/DashboardCard';
import HabitTracker from './HabitTracker';
import TaskProgress from './TaskProgress';
import { expenseCategories, monthlyExpenses, habitMetrics, tasksByCategory } from "../data/mockData";

export const DashboardCharts = () => {
  return (
    <>
      <Grid item xs={12} md={8}>
        <DashboardCard title="Monthly Expense Pattern">
          <LineChartComponent
            data={monthlyExpenses}
            dataKey="essential"
            secondaryDataKey="discretionary"
            xAxisKey="month"
            valueType="currency"
          />
        </DashboardCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <DashboardCard title="Habit Tracker">
          <HabitTracker habits={habitMetrics} />
        </DashboardCard>
      </Grid>

      <Grid item xs={12} md={5}>
        <DashboardCard title="Expenses Distribution">
          <BarChartComponent
            data={expenseCategories}
            dataKey="value"
            valueType="currency"
          />
        </DashboardCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <DashboardCard title="Task Progress">
          <TaskProgress categories={tasksByCategory} />
        </DashboardCard>
      </Grid>

      <Grid item xs={12} md={3}>
        <DashboardCard title="Task Completion">
          <DonutChartComponent
            data={[
              { name: 'Completed', value: 70 },
              { name: 'Pending', value: 30 },
            ]}
            dataKey="value"
            nameKey="name"
          />
        </DashboardCard>
      </Grid>


    </>
  );
};
