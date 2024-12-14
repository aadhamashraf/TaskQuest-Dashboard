import { Box, Typography, LinearProgress, Grid } from '@mui/material';

const TaskProgress = ({ categories }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item xs={12} key={index}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1" fontWeight="medium">
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.completed}/{category.total} tasks
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(category.completed / category.total) * 100}
              sx={{ height: 8, borderRadius: 4 }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskProgress;