import { Box, Typography } from '@mui/material';
import { getFormattedValue } from '../../../utils/formatters';


const CustomTooltip = ({ active, payload, label, valueType }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 1.5,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
    >
      <Typography variant="subtitle2">{label}</Typography>
      {payload.map((entry, index) => (
        <Typography
          key={index}
          variant="body2"
          color={entry.color}
        >
          {`${entry.name}: ${getFormattedValue(entry.value, valueType)}`}
        </Typography>
      ))}
    </Box>
  );
};

export default CustomTooltip;