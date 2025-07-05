'use client';

import RequestForm from '../_components/RequestForm';
import { useRouter } from 'next/navigation';

export default function NewRequestPage() {
  const router = useRouter();

  const handleSubmitSuccess = (requestId: string) => {
    router.push(`/requests/${requestId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Breakup Request
          </h1>
          <p className="mt-2 text-gray-600">
            Fill out the details below and we'll handle the rest
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <RequestForm 
            onSuccess={handleSubmitSuccess} 
            initialValues={{
              targetName: '',
              relationshipType: 'dating',
              method: 'text',
              preferredDate: '',
              specialInstructions: ''
            }}
          />
        </div>
      </div>
    </div>
  );
}