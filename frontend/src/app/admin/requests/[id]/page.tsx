// import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import StatusBadge from '../../_components/StatusBadge';

// Mock data - replace with API call
const getRequestDetails = async (id: string) => {
  return {
    id,
    userEmail: 'alex@example.com',
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
    updatedAt: '2023-12-12T09:15:00',
    price: '$99'
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
          href="/admin/requests" 
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          {/* <ArrowLeftIcon className="h-5 w-5 mr-2" /> */}
          Back to Requests
        </Link>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Request Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Breakup Request #{request.id}
              </h1>
              <div className="mt-1 flex items-center">
                <StatusBadge status={request.status} />
                <span className="ml-3 text-sm text-gray-500">
                  Created: {new Date(request.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="space-x-3">
              <button className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Reassign
              </button>
              {request.status === 'in-progress' && (
                <button className="text-sm font-medium text-red-500 hover:text-red-600">
                  Cancel Request
                </button>
              )}
            </div>
          </div>

          {/* Request Details */}
          <div className="px-6 py-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Client Information
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">User Email</p>
                  <p className="mt-1 text-sm font-medium">
                    {request.userEmail}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Target Name</p>
                  <p className="mt-1 text-sm font-medium">
                    {request.targetName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Relationship Type</p>
                  <p className="mt-1 text-sm font-medium capitalize">
                    {request.relationshipType}
                  </p>
                </div>
              </div>
            </div>

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
                  <p className="text-sm text-gray-500">Preferred Date</p>
                  <p className="mt-1 text-sm font-medium">
                    {new Date(request.preferredDate).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="mt-1 text-sm font-medium">
                    {request.price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialist Assignment */}
          <div className="px-6 py-5 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Assigned Specialist
            </h2>
            <div className="flex items-center justify-between">
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
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(request.specialist.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">
                      {request.specialist.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-sm font-medium text-red-500 hover:text-red-600">
                Message Specialist
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="px-6 py-5 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Special Instructions
            </h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-700">
                {request.specialInstructions || 'No special instructions provided'}
              </p>
            </div>
          </div>

          {/* Admin Actions */}
          <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Admin Actions
            </h2>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Edit Details
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Refund Client
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Download Transcript
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}