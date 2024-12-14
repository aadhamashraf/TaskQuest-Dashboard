import { Grid } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MetricCard from './layout/metrics/MetricCard';
import { financialMetrics, taskMetrics } from "../data/mockData";

export const DashboardMetrics = () => {
  const budgetProgress = (financialMetrics.totalSpent / financialMetrics.totalBudget) * 100;
  const taskProgress = (taskMetrics.completedTasks / taskMetrics.totalTasks) * 100;

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Task Completion"
          value={taskProgress}
          trend={`${taskMetrics.completedTasks}/${taskMetrics.totalTasks}`}
          type="percentage"
          icon={TaskAltIcon}
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Budget Utilization"
          value={budgetProgress}
          trend={`${financialMetrics.totalSpent}/${financialMetrics.totalBudget}`}
          type="percentage"
          icon={AccountBalanceWalletIcon}
        />
      </Grid>
    
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Savings Progress"
          value={(financialMetrics.currentSavings / financialMetrics.savingsGoal) * 100}
          trend={`+${((financialMetrics.currentSavings / financialMetrics.savingsGoal) * 100).toFixed(1)}%`}
          type="percentage"
          icon={TrendingUpIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Habit Streaks"
          value={7}
          trend="+2 days"
          type="number"
          icon={EmojiEventsIcon}
        />
      </Grid>
    </>
  );
};