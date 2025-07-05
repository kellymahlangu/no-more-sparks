"use client";
import { MetricsCard, MetricsCardProps } from './_components/MetricsCard';
import RequestTable from './_components/RequestTable';

// Mock data - replace with real API calls
const metrics: MetricsCardProps[] = [
  { name: 'Total Requests', value: '248', change: '+12%', changeType: 'positive' },
  { name: 'Completed', value: '189', change: '+8%', changeType: 'positive' },
  { name: 'Cancelled', value: '23', change: '-3%', changeType: 'negative' },
  { name: 'Revenue', value: '$24,850', change: '+18%', changeType: 'positive' }
];

const recentRequests = [
  {
    id: 'req_789',
    user: 'alex@example.com',
    target: 'Jamie Smith',
    method: 'Phone Call',
    specialist: 'Taylor M.',
    status: 'In Progress',
    price: '$99',
    createdAt: '2023-12-10'
  },
  // Add more mock requests...
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricsCard key={metric.name} {...metric} />
          ))}
        </div>

        {/* Recent Requests */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Recent Breakup Requests</h2>
            <button className="text-sm font-medium text-red-500 hover:text-red-600">
              View All
            </button>
          </div>
          <RequestTable requests={recentRequests} />
        </div>

        {/* Specialist Management */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Specialist Performance</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Specialist
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completed
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg Rating
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Earnings
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: 'Alex C.', completed: 42, rating: 4.8, earnings: '$4,200' },
                    { name: 'Taylor M.', completed: 38, rating: 4.6, earnings: '$3,800' },
                    { name: 'Jordan P.', completed: 29, rating: 4.4, earnings: '$2,900' }
                  ].map((specialist) => (
                    <tr key={specialist.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-600 font-medium">
                              {specialist.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {specialist.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {specialist.rating.toFixed(1)} ★
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {specialist.completed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(specialist.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {specialist.earnings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-red-500 hover:text-red-600 mr-3">
                          View
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                          Message
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}