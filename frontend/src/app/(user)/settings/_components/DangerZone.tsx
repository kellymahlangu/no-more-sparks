'use client';

import { useState } from 'react';

export default function DangerZone() {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = () => {
    setIsDeleting(true);
    // Add API call to delete account
    setTimeout(() => {
      alert('Account deletion requested. A confirmation email has been sent.');
      setIsDeleting(false);
    }, 1500);
  };

  return (
    <div className="border border-red-200 rounded-lg p-4 bg-red-50">
      <h2 className="text-lg font-medium text-red-800">Danger Zone</h2>
      <p className="text-sm text-red-600 mt-1">
        These actions are irreversible. Proceed with caution.
      </p>

      <div className="mt-4">
        <button
          onClick={handleDeleteAccount}
          disabled={isDeleting}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
            isDeleting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isDeleting ? 'Processing...' : 'Delete My Account'}
        </button>
        <p className="mt-2 text-xs text-red-500">
          This will permanently delete your account and all associated data.
        </p>
      </div>
    </div>
  );
}