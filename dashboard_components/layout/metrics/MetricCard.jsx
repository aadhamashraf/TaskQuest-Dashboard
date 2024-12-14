import { Paper, Box, Typography, useTheme } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { getFormattedValue } from '../../../utils/formatters';

const MetricCard = ({ title, value, trend, type, icon: Icon }) => {
  const theme = useTheme();
  const isPositive = trend.startsWith('+');
  const formattedValue = getFormattedValue(value, type);

  return (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[4]
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 1000 }}>
          {title}
        </Typography>
        {Icon && <Icon color="primary" />}
      </Box>
      
      <Box>
        <Typography variant="h4" component="div" gutterBottom>
          {formattedValue}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isPositive ? (
            <TrendingUpIcon color="success" fontSize="large" />
          ) : (
            <TrendingDownIcon color="error" fontSize="large" />
          )}
          <Typography
            variant="body2"
            color={isPositive ? 'success.main' : 'error.main'}
            sx={{ ml: 0.5 }}
          >
            {trend}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default MetricCard;
