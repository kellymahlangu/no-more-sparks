interface StatusBadgeProps {
    status: string;
  }
  
  export default function StatusBadge({ status }: StatusBadgeProps) {
    const statusMap = {
      pending: {
        text: 'Pending',
        color: 'bg-yellow-100 text-yellow-800'
      },
      'in-progress': {
        text: 'In Progress',
        color: 'bg-blue-100 text-blue-800'
      },
      completed: {
        text: 'Completed',
        color: 'bg-green-100 text-green-800'
      },
      cancelled: {
        text: 'Cancelled',
        color: 'bg-gray-100 text-gray-800'
      },
      default: {
        text: status,
        color: 'bg-gray-100 text-gray-800'
      }
    };
  
    const currentStatus = statusMap[status as keyof typeof statusMap] || statusMap.default;
  
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${currentStatus.color}`}>
        {currentStatus.text}
      </span>
    );
  }