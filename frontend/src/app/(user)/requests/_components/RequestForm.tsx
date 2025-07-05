'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  targetName: z.string().min(1, 'Name is required'),
  relationshipType: z.enum(['dating', 'engaged', 'married', 'friends', 'other']),
  method: z.enum(['text', 'email', 'phone-call', 'in-person', 'social-media']),
  preferredDate: z.string().min(1, 'Date is required'),
  specialInstructions: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

interface RequestFormProps {
  onSuccess: (requestId: string) => void;
  initialValues: Partial<FormValues>;
}

export default function RequestForm({ onSuccess, initialValues }: RequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Replace with actual API call
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to create request');
      }

      const result = await response.json();
      onSuccess(result.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedMethod = watch('method');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="targetName" className="block text-sm font-medium text-gray-700">
          Who are we breaking up with? *
        </label>
        <input
          id="targetName"
          {...register('targetName')}
          type="text"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.targetName ? 'border-red-500' : 'border'
          }`}
        />
        {errors.targetName && (
          <p className="mt-1 text-sm text-red-500">{errors.targetName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="relationshipType" className="block text-sm font-medium text-gray-700">
          Relationship Type *
        </label>
        <select
          id="relationshipType"
          {...register('relationshipType')}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.relationshipType ? 'border-red-500' : 'border'
          }`}
        >
          <option value="dating">Dating</option>
          <option value="engaged">Engaged</option>
          <option value="married">Married</option>
          <option value="friends">Friends</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Breakup Method *
        </label>
        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: 'text', label: 'Text Message', icon: '💬' },
            { value: 'email', label: 'Email', icon: '✉️' },
            { value: 'phone-call', label: 'Phone Call', icon: '📞' },
            { value: 'in-person', label: 'In Person', icon: '👥' },
            { value: 'social-media', label: 'Social Media', icon: '📱' }
          ].map((method) => (
            <label
              key={method.value}
              className={`relative rounded-lg border p-4 cursor-pointer ${
                selectedMethod === method.value
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input
                type="radio"
                value={method.value}
                {...register('method')}
                className="sr-only"
              />
              <div className="flex items-center">
                <span className="text-2xl mr-3">{method.icon}</span>
                <span className="text-sm font-medium">{method.label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.method && (
          <p className="mt-1 text-sm text-red-500">{errors.method.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
          Preferred Date/Time *
        </label>
        <input
          id="preferredDate"
          {...register('preferredDate')}
          type="datetime-local"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.preferredDate ? 'border-red-500' : 'border'
          }`}
        />
        {errors.preferredDate && (
          <p className="mt-1 text-sm text-red-500">{errors.preferredDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">
          Special Instructions
        </label>
        <textarea
          id="specialInstructions"
          {...register('specialInstructions')}
          rows={3}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.specialInstructions ? 'border-red-500' : 'border'
          }`}
          placeholder="Any specific messages, tone preferences, or details we should know?"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Breakup Request ($99)'}
        </button>
      </div>
    </form>
  );
}