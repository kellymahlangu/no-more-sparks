"use client";
import Link from 'next/link';

interface BreakupCardProps {
  id: string;
  status: string;
  specialist: string;
  method: string;
  targetName: string;
  createdAt: string;
  price?: string;
  result?: string;
  isPast?: boolean;
}

export default function BreakupCard({
  id,
  status,
  specialist,
  method,
  targetName,
  createdAt,
  price,
  result,
  isPast = false
}: BreakupCardProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <Link href={`/requests/${id}`}>
        <div className="p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {targetName} <span className="text-gray-500">·</span>{' '}
                <span className="text-sm font-normal">{method}</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Assigned to {specialist} · {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {!isPast && price && (
                <span className="text-gray-900 font-medium">{price}</span>
              )}
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  isPast
                    ? 'bg-green-100 text-green-800'
                    : status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {isPast ? result || 'Completed' : status}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}