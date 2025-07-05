"use client";
export interface MetricsCardProps {
    name: string;
    value: string;
    change: string;
    changeType: 'positive' | 'negative';
  }
  
  export function MetricsCard({
    name,
    value,
    change,
    changeType
  }: MetricsCardProps) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {name}
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">
                    {value}
                  </div>
                </dd>
              </dl>
            </div>
            <div className="ml-5 flex-shrink-0">
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  changeType === 'positive'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {change}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-red-500 hover:text-red-600"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    );
  }