import { useState } from 'react';
import { User } from 'lucide-react';
import { AccountModal } from './AccountModal';

export function AccountButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
      >
        <User className="h-5 w-5" />
        <span>My Account</span>
      </button>

      <AccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 