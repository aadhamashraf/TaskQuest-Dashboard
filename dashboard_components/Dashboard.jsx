import { Box, Grid } from '@mui/material';
import { DashboardMetrics } from './DashboardMetrics';
import { DashboardCharts } from './DashboardCharts';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: 'background.default' }}>
      <Grid container spacing={3}>
        <DashboardMetrics />
        <DashboardCharts />
      </Grid>
    </Box>
  );
};

export default Dashboard;