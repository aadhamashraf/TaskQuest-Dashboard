import { Box, Typography, LinearProgress, Chip } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const HabitTracker = ({ habits }) => {
  return (
    <Box>
      {habits.map((habit, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1" fontWeight="medium">
              {habit.name}
            </Typography>
            <Chip
              icon={<LocalFireDepartmentIcon />}
              label={`${habit.streak} day streak`}
              color="primary"
              size="small"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LinearProgress
              variant="determinate"
              value={(habit.completed / habit.target) * 100}
              sx={{ flexGrow: 1, mr: 2, height: 8, borderRadius: 4 }}
            />
            <Typography variant="body2" color="text.secondary">
              {habit.completed}/{habit.target}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HabitTracker;