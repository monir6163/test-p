import { DocumentDuplicateIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toast } from 'sonner';

export default function CardDetailsModal({ card, onClose }: any) {
  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`, {
      duration: 2000,
      description: 'You can paste it anywhere using Ctrl+V',
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-black/80 rounded-2xl p-6 shadow-lg max-w-lg w-full
               max-h-[90vh] overflow-y-auto border border-white/10"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 p-1 rounded-full bg-white/10 hover:bg-white/20"
          onClick={onClose}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Card Details</h2>

        {/* Card Image */}
        <div className="w-full rounded-lg mb-4 overflow-hidden">
          <Image
            src={
              card.type === 'visa'
                ? '/assets/images/brand/sarafcard_visa_3d_silver_transparent.png'
                : '/assets/images/admin/card-mastercard.png'
            }
            alt={card.type === 'visa' ? 'Visa card' : 'Mastercard'}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div>
            <p className="text-xs opacity-80">Card Number</p>
            <div className="flex items-center justify-between">
              <p className="font-mono">{card.maskedNumber}</p>
              <button onClick={() => copy(card.maskedNumber, 'Card Number')}>
                <DocumentDuplicateIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs opacity-80">Expiry Date</p>
            <p>
              {new Date(card.expiryDate).toLocaleDateString('en-US', {
                month: '2-digit',
                year: '2-digit',
              })}
            </p>
          </div>

          <div>
            <p className="text-xs opacity-80">CVV</p>
            <div className="flex items-center justify-between">
              <p className="font-mono">123</p>
              <button onClick={() => copy('123', 'CVV')}>
                <DocumentDuplicateIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs opacity-80">Balance</p>
            <p>
              {card.currency} {card.balance.toFixed(2)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
