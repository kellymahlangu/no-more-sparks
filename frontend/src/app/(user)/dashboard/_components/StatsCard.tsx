"use client";
export default function StatsCard({
    title,
    value,
    icon
  }: {
    title: string;
    value: string | number;
    icon: string;
  }) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-2xl mr-4">{icon}</div>
            <div>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {value}
              </dd>
            </div>
          </div>
        </div>
      </div>
    );
  }