"use client";
import BreakupCard from './_components/BreakupCard';
import StatsCard from './_components/StatsCard';

// Mock data - replace with real API calls
const activeRequests = [
  {
    id: 'req_123',
    status: 'In Progress',
    specialist: 'Alex C.',
    method: 'Phone Call',
    targetName: 'Jamie',
    createdAt: '2023-11-15',
    price: '$99'
  }
];

const pastRequests = [
  {
    id: 'req_456',
    status: 'Completed',
    specialist: 'Taylor M.',
    method: 'Text Message',
    targetName: 'Riley',
    createdAt: '2023-10-22',
    result: 'Successful'
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Breakup Dashboard
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Active Requests" 
            value={activeRequests.length} 
            icon="🔥" 
          />
          <StatsCard 
            title="Completed" 
            value={pastRequests.length} 
            icon="✅" 
          />
          <StatsCard 
            title="Total Spent" 
            value="$198" 
            icon="💸" 
          />
        </div>

        {/* Active Requests */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Active Breakups
            </h2>
            <a
              href="/requests/new"
              className="text-sm font-medium text-red-500 hover:text-red-600"
            >
              + New Request
            </a>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            {activeRequests.length > 0 ? (
              activeRequests.map((request) => (
                <BreakupCard key={request.id} {...request} />
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                No active breakup requests
              </div>
            )}
          </div>
        </section>

        {/* Past Requests */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Breakup History
          </h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {pastRequests.length > 0 ? (
              pastRequests.map((request) => (
                <BreakupCard key={request.id} {...request} isPast />
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                No past breakups yet
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}