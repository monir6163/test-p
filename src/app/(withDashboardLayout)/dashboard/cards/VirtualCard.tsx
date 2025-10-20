import { EyeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CardDetailsModal from './CardDetailsModal';

type Card = {
  id: string;
  maskedNumber: string;
  type: string;
  status: string;
  balance: number;
  expiryDate: string;
  currency: string;
};

interface Props {
  card: Card;
  showBalance?: boolean;
  compact?: boolean;
}

export default function VirtualCard({
  card,
  showBalance = true,
  compact = false,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const statusColor = {
    active: 'success',
    inactive: 'warning',
    blocked: 'error',
    expired: 'error',
  }[card.status];

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ scale: compact ? 1.02 : 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`relative ${
          compact ? 'h-32' : 'h-48'
        } rounded-2xl overflow-hidden shadow-2xl cursor-pointer`}
      >
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={
              card.type === 'visa'
                ? '/assets/images/brand/sarafcard_visa_3d_silver_transparent.png'
                : '/assets/images/admin/card-mastercard.png'
            }
            alt={`${card.type} Card`}
            fill
            className="object-cover brightness-90 contrast-110 rounded-2xl"
          />
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute bg-black/85 inset-0" />

        {/* Content */}
        <div className="relative h-full p-4 flex flex-col justify-between text-white">
          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-wide font-semibold">
                {card.type}
              </p>
              <div className={`badge-${statusColor} mt-1 capitalize`}>
                {card.status}
              </div>
            </div>

            {/* Eye Icon */}
            <button
              onClick={() => setModalOpen(true)}
              className="p-1 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Card Number */}
          <p
            className={`${
              compact ? 'text-sm' : 'text-lg'
            } tracking-wider font-mono`}
          >
            {card.maskedNumber}
          </p>

          {/* Balance */}
          {showBalance && (
            <div>
              <p className="text-xs opacity-80">BALANCE</p>
              <p className={`${compact ? 'text-sm' : 'text-lg'} font-semibold`}>
                {card.currency} {card.balance.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Details Modal */}
      {modalOpen && (
        <CardDetailsModal card={card} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
