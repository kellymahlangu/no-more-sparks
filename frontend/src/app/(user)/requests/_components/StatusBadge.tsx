"use client";
interface StatusBadgeProps {
    status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  }
  
  export default function StatusBadge({ status }: StatusBadgeProps) {
    const statusConfig = {
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
      }
    };
  
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[status].color}`}
      >
        {statusConfig[status].text}
      </span>
    );
  }