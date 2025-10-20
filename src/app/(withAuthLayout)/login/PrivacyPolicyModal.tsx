'use client';

import Modal from './Modal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
  onAccept,
}: PrivacyPolicyModalProps) {
  return (
    <Modal
      title="Privacy Policy"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-100"
          >
            Close
          </button>
          <button
            onClick={() => {
              onAccept();
              onClose();
            }}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm text-white font-medium"
          >
            Accept Policy
          </button>
        </div>
      }
    >
      <p className="text-sm italic text-gray-400 mb-2">
        Effective Date: 25 January, 2025
      </p>

      <h3 className="text-xl font-bold mb-2">Cookie & Privacy Principles</h3>
      <p>
        These Cookie & Privacy Principles apply to SarafCard’s digital voucher
        marketplace, partner network, and related services. By accessing our
        platform as a partner or end-user, you acknowledge and consent to our
        data practices.
      </p>

      <h4 className="mt-4 font-semibold">1. Introduction & Scope</h4>
      <p>
        SarafCard operates as a digital voucher distribution platform connecting
        partners with users. This Privacy Policy outlines how we collect, use,
        and protect your data.
      </p>

      <h4 className="mt-4 font-semibold">2. Data Collection</h4>
      <p>
        We collect information that you provide directly, such as registration
        details, and automatically through cookies or analytics tools.
      </p>
    </Modal>
  );
}
