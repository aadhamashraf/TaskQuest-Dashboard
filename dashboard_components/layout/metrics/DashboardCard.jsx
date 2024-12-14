import { Paper, Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DashboardCard = ({ title, children, action }) => {
  return (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
      }}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        {action || (
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        )}
      </Box>
      {children}
    </Paper>
  );
};

export default DashboardCard;