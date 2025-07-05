import StatusBadge from '../_components/StatusBadge';
import Link from 'next/link';

interface RequestDetails {
  id: string;
  targetName: string;
  relationshipType: string;
  method: string;
  preferredDate: string;
  specialInstructions: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  specialist?: {
    name: string;
    rating: number;
  };
  createdAt: string;
  updatedAt: string;
}

// Mock data - replace with real API fetch
const getRequestDetails = async (id: string): Promise<RequestDetails> => {
  return {
    id,
    targetName: 'Jamie Smith',
    relationshipType: 'dating',
    method: 'phone-call',
    preferredDate: '2023-12-15T18:00:00',
    specialInstructions: 'Please emphasize we can still be friends',
    status: 'in-progress',
    specialist: {
      name: 'Alex Carter',
      rating: 4.8
    },
    createdAt: '2023-12-10T14:32:00',
    updatedAt: '2023-12-12T09:15:00'
  };
};

export default async function RequestDetailPage({
  params
}: {
  params: { id: string };
}) {
  const request = await getRequestDetails(params.id);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/dashboard" 
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          {/* <ArrowLeftIcon className="h-5 w-5 mr-2" /> */}
          Back to Dashboard
        </Link>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Request Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Breakup with {request.targetName}
              </h1>
              <div className="mt-1 flex items-center">
                <StatusBadge status={request.status} />
                <span className="ml-3 text-sm text-gray-500">
                  Created: {new Date(request.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            {request.status === 'pending' && (
              <button className="text-sm font-medium text-red-500 hover:text-red-600">
                Cancel Request
              </button>
            )}
          </div>

          {/* Request Details */}
          <div className="px-6 py-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Breakup Details
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Method</p>
                  <p className="mt-1 text-sm font-medium capitalize">
                    {request.method.replace('-', ' ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Relationship Type</p>
                  <p className="mt-1 text-sm font-medium capitalize">
                    {request.relationshipType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Preferred Date</p>
                  <p className="mt-1 text-sm font-medium">
                    {new Date(request.preferredDate).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Special Instructions
              </h2>
              <p className="text-sm text-gray-700">
                {request.specialInstructions || 'None provided'}
              </p>
            </div>
          </div>

          {/* Specialist Assignment */}
          {request.specialist && (
            <div className="px-6 py-5 border-t border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Assigned Specialist
              </h2>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {request.specialist.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {request.specialist.name}
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(request.specialist?.rating || 0)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">
                      {request.specialist.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline */}
          <div className="px-6 py-5 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Breakup Timeline
            </h2>
            <div className="flow-root">
              <ul className="-mb-8">
                {[
                  {
                    id: 1,
                    event: 'Request created',
                    date: request.createdAt,
                    status: 'complete'
                  },
                  {
                    id: 2,
                    event: 'Specialist assigned',
                    date: request.updatedAt,
                    status: 'complete'
                  },
                  {
                    id: 3,
                    event: 'Breakup scheduled',
                    date: request.preferredDate,
                    status: request.status === 'pending' ? 'pending' : 'complete'
                  },
                  {
                    id: 4,
                    event: 'Breakup completed',
                    date: '',
                    status: request.status === 'completed' ? 'complete' : 'pending'
                  }
                ].map((item, itemIdx) => (
                  <li key={item.id}>
                    <div className="relative pb-8">
                      {itemIdx !== 3 ? (
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                              item.status === 'complete'
                                ? 'bg-green-500'
                                : 'bg-gray-300'
                            }`}
                          >
                            {item.status === 'complete' ? (
                              <CheckIcon className="h-5 w-5 text-white" />
                            ) : (
                              <ClockIcon className="h-5 w-5 text-gray-500" />
                            )}
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-sm text-gray-800">
                              {item.event}
                            </p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-500">
                            {item.date && (
                              <time dateTime={item.date}>
                                {new Date(item.date).toLocaleString()}
                              </time>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}