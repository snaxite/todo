/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
type BadgeType = {
  variant?: string;
  label: string;
};

export default function Index({
  variant = 'primary',
  label = 'No label',
}: BadgeType): JSX.Element {
  let color = '';
  switch (variant) {
    case 'warning':
      color = 'bg-yellow-400 text-gray-50 badge';
      break;
    case 'info':
      color = 'text-gray-50 bg-blue-400';
      break;
    case 'success':
      color = 'text-gray-50 bg-green-400';
      break;
    default:
      color = 'bg-yellow-400 text-gray-50 badge';
      break;
  }
  return <span className={`badge ${color}`}>{label}</span>;
}
