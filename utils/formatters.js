export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

export const formatPercentage = (value) => {
  return `${value}%`;
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US').format(value);
};

export const getFormattedValue = (value, type) => {
  switch (type) {
    case 'currency':
      return formatCurrency(value);
    case 'percentage':
      return formatPercentage(value);
    default:
      return formatNumber(value);
  }
};